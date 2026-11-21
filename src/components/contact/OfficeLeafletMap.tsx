import React, {useEffect, useRef, useState} from 'react';
import type * as LeafletTypes from 'leaflet';
import {Compass, ExternalLink, MapPin} from 'lucide-react';
import {BRAND} from '../../config/brand.ts';

const {lat: OFFICE_LAT, lng: OFFICE_LNG} = BRAND.officeCoordinates;

export function OfficeLeafletMap() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<LeafletTypes.Map | null>(null);
  const markerRef = useRef<LeafletTypes.Marker | null>(null);

  const [shouldLoadMap, setShouldLoadMap] = useState(false);
  const [mapReady, setMapReady] = useState(false);
  const [tileError, setTileError] = useState(false);

  // Defer loading Leaflet JS/CSS and map tiles until near viewport
  useEffect(() => {
    const node = wrapperRef.current;
    if (!node) {
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      setShouldLoadMap(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoadMap(true);
          observer.disconnect();
        }
      },
      {rootMargin: '250px'},
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Client-only dynamic import so Node SSR never touches Leaflet DOM globals
  useEffect(() => {
    if (!shouldLoadMap || !mapContainerRef.current || mapInstanceRef.current) {
      return;
    }

    let isCancelled = false;

    async function initMap() {
      const [leafletModule] = await Promise.all([
        import('leaflet'),
        import('leaflet/dist/leaflet.css'),
      ]);
      const L = leafletModule.default ?? leafletModule;

      if (isCancelled || !mapContainerRef.current || mapInstanceRef.current) {
        return;
      }

      const map = L.map(mapContainerRef.current, {
        center: [OFFICE_LAT, OFFICE_LNG],
        zoom: 16,
        minZoom: 4,
        maxZoom: 19,
        zoomControl: true,
        scrollWheelZoom: false,
        dragging: true,
        touchZoom: true,
        doubleClickZoom: true,
      });

      mapInstanceRef.current = map;

      let failedTiles = 0;
      let loadedTiles = 0;

      const tileLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors',
      });

      tileLayer.on('tileload', () => {
        loadedTiles += 1;
        if (!isCancelled) {
          setTileError(false);
        }
      });

      tileLayer.on('tileerror', () => {
        failedTiles += 1;
        if (!isCancelled && loadedTiles === 0 && failedTiles >= 4) {
          setTileError(true);
        }
      });

      tileLayer.addTo(map);

      const customMarkerIcon = L.divIcon({
        className: 'klyia-custom-marker-icon',
        html: `
          <div style="width:170px;height:52px;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;pointer-events:auto;">
            <span style="display:inline-flex;align-items:center;gap:6px;padding:4px 10px;border-radius:9999px;background:#141414;border:2px solid #D41514;color:#FFFFFF;font-family:Inter,sans-serif;font-size:12px;font-weight:700;white-space:nowrap;box-shadow:0 6px 18px rgba(0,0,0,0.45);">
              <span style="width:7px;height:7px;border-radius:9999px;background:#D41514;display:inline-block;"></span>
              ${BRAND.name}
            </span>
            <span style="width:0;height:0;border-left:6px solid transparent;border-right:6px solid transparent;border-top:7px solid #D41514;margin-top:-1px;"></span>
            <span style="width:14px;height:14px;border-radius:9999px;background:#D41514;border:2px solid #FFFFFF;box-shadow:0 3px 10px rgba(212,21,20,0.65);margin-top:2px;"></span>
          </div>
        `,
        iconSize: [170, 52],
        iconAnchor: [85, 50],
        popupAnchor: [0, -54],
      });

      const popupContent = `
        <div class="min-w-[230px] max-w-[265px] space-y-2 text-left">
          <div class="flex items-center gap-2">
            <span class="inline-block h-2.5 w-2.5 rounded-full bg-[#D41514] shrink-0"></span>
            <p class="text-sm font-bold text-[#111111] leading-tight m-0">${BRAND.name}</p>
          </div>
          <p class="text-xs leading-relaxed text-[#404040] m-0">
            ${BRAND.address.line1}<br />
            ${BRAND.address.line2}<br />
            ${BRAND.address.cityStateCountry}
          </p>
          <div class="pt-1.5 flex items-center gap-2">
            <a
              href="${BRAND.openStreetMapDirectionsUrl}"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-1.5 rounded-md bg-[#D41514] px-3 py-1.5 text-xs font-semibold !text-white hover:bg-[#b51110] transition-colors no-underline"
            >
              Get Directions
            </a>
            <a
              href="${BRAND.openStreetMapUrl}"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center rounded-md border border-[#d4d4d8] bg-[#f4f4f5] px-2.5 py-1.5 text-xs font-semibold !text-[#18181b] hover:bg-[#e4e4e7] transition-colors no-underline"
            >
              View Map
            </a>
          </div>
        </div>
      `;

      const marker = L.marker([OFFICE_LAT, OFFICE_LNG], {
        icon: customMarkerIcon,
        title: BRAND.name,
        alt: `${BRAND.name} office marker in Risali, Bhilai`,
      }).addTo(map);

      marker.bindPopup(popupContent, {
        className: 'klyia-leaflet-popup',
        maxWidth: 300,
        closeButton: true,
        autoPan: true,
      });

      marker.openPopup();
      markerRef.current = marker;

      if (!isCancelled) {
        setMapReady(true);
      }
    }

    initMap().catch(() => {
      if (!isCancelled) {
        setTileError(true);
      }
    });

    return () => {
      isCancelled = true;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
        markerRef.current = null;
      }
    };
  }, [shouldLoadMap]);

  const handleRecenter = () => {
    const map = mapInstanceRef.current;
    const marker = markerRef.current;
    if (map) {
      map.setView([OFFICE_LAT, OFFICE_LNG], 16, {animate: true});
      marker?.openPopup();
    }
  };

  return (
    <div
      ref={wrapperRef}
      className="relative isolate w-full h-[320px] sm:h-[400px] lg:h-[440px] bg-[#141414]"
      aria-label={`Interactive OpenStreetMap showing ${BRAND.name} in Risali, Bhilai`}
    >
      <div
        ref={mapContainerRef}
        className="klyia-leaflet-map w-full h-full z-0"
      />

      {/* Re-center Office Pin Control */}
      {mapReady && !tileError ? (
        <button
          type="button"
          onClick={handleRecenter}
          className="absolute top-3 right-3 z-[400] inline-flex items-center gap-1.5 rounded-lg border border-[#303030] bg-[#141414]/95 px-3 py-1.5 text-xs font-semibold text-[#CDCBCA] shadow-lg hover:border-[#D41514] hover:text-white transition-colors cursor-pointer"
          aria-label={`Center map on ${BRAND.name}`}
        >
          <Compass className="w-3.5 h-3.5 text-[#D41514]" aria-hidden="true" />
          <span>Center on Office</span>
        </button>
      ) : null}

      {/* Initial skeleton before intersection / Leaflet hydration */}
      {!mapReady && !tileError ? (
        <div className="absolute inset-0 z-[410] flex flex-col items-center justify-center bg-[#111111] px-6 text-center">
          <MapPin className="w-6 h-6 text-[#D41514] mb-2" aria-hidden="true" />
          <p className="text-sm font-semibold text-white">{BRAND.name}</p>
          <p className="mt-1 text-xs text-[#969696]">
            Loading interactive OpenStreetMap for Risali, Bhilai...
          </p>
        </div>
      ) : null}

      {/* Tile Load Fallback UI */}
      {tileError ? (
        <div className="absolute inset-0 z-[420] flex flex-col items-center justify-center bg-[#141414]/95 px-6 py-8 text-center">
          <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full border border-[#D41514]/50 bg-[#D41514]/15">
            <MapPin className="h-5 w-5 text-[#D41514]" aria-hidden="true" />
          </div>
          <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-white">
            {BRAND.name}
          </h3>
          <p className="mt-1.5 max-w-md text-xs sm:text-sm leading-relaxed text-[#CDCBCA]">
            {BRAND.address.full}
          </p>
          <p className="mt-2 text-xs text-[#969696]">
            Interactive map tiles could not be reached from your current network. Use the button below to open directions directly in OpenStreetMap.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <a
              href={BRAND.openStreetMapDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#D41514] px-4 py-2 text-xs sm:text-sm font-semibold text-white hover:bg-[#b51110] transition-colors"
            >
              <span>Get Directions</span>
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
            <a
              href={BRAND.openStreetMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#303030] bg-[#1B1B1B] px-4 py-2 text-xs sm:text-sm font-semibold text-[#CDCBCA] hover:border-[#D41514] hover:text-white transition-colors"
            >
              <span>Open in OpenStreetMap</span>
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      ) : null}
    </div>
  );
}
