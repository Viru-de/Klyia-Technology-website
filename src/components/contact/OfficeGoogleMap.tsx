import React, {useEffect, useState} from 'react';
import {
  APILoadingStatus,
  APIProvider,
  AdvancedMarker,
  AdvancedMarkerAnchorPoint,
  InfoWindow,
  Map as GoogleMap,
  useAdvancedMarkerRef,
  useApiLoadingStatus,
  useMapsLibrary,
} from '@vis.gl/react-google-maps';
import {ExternalLink, MapPin, Navigation} from 'lucide-react';
import {BRAND} from '../../config/brand.ts';

interface LatLngLiteral {
  lat: number;
  lng: number;
}

interface OfficeLocationApiResponse {
  ok?: boolean;
  configured?: boolean;
  quotaExceeded?: boolean;
  mapsApiKey?: string;
  center?: LatLngLiteral | null;
  placeId?: string | null;
  formattedAddress?: string;
}

const ADDRESS_SEARCH_QUERIES = [
  BRAND.address.full,
  'Bajrang Hardware, Krishna Talkies Road, Risali, Bhilai, Chhattisgarh, India',
];

function MapFallbackCard({
  message,
}: {
  message: string;
}) {
  return (
    <div className="flex h-[320px] sm:h-[380px] lg:h-[440px] w-full flex-col items-center justify-center bg-[#0D0D0D] px-6 text-center">
      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-[#D41514]/40 bg-[#D41514]/15 text-[#D41514]">
        <MapPin className="h-6 w-6" aria-hidden="true" />
      </div>
      <p className="font-[family-name:var(--font-display)] text-base font-bold text-white">
        {BRAND.name}
      </p>
      <p className="mt-1.5 max-w-md text-xs sm:text-sm text-[#969696] leading-relaxed">
        {BRAND.address.full}
      </p>
      <p className="mt-2 max-w-md text-xs text-[#969696]">{message}</p>
      <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
        <a
          href={BRAND.googleMapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-[#D41514] px-4 py-2 text-xs sm:text-sm font-semibold text-white hover:bg-[#b51110] transition-colors"
        >
          <Navigation className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>Get Directions</span>
          <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
        </a>
        <a
          href={BRAND.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-[#303030] bg-[#141414] px-4 py-2 text-xs sm:text-sm font-semibold text-[#CDCBCA] hover:border-[#D41514]/60 hover:text-white transition-colors"
        >
          <span>Open in Google Maps</span>
          <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}

function OfficeMapCanvas({initialCenter}: {initialCenter: LatLngLiteral | null}) {
  const apiStatus = useApiLoadingStatus();
  const placesLib = useMapsLibrary('places');
  const [center, setCenter] = useState<LatLngLiteral | null>(initialCenter);
  const [resolvingLocation, setResolvingLocation] = useState(!initialCenter);
  const [lookupFailed, setLookupFailed] = useState(false);
  const [infoWindowOpen, setInfoWindowOpen] = useState(true);
  const [markerRef, marker] = useAdvancedMarkerRef();

  useEffect(() => {
    if (initialCenter) {
      setCenter(initialCenter);
      setResolvingLocation(false);
    }
  }, [initialCenter]);

  useEffect(() => {
    if (apiStatus === APILoadingStatus.AUTH_FAILURE && typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('gmp-quota-exceeded'));
    }
  }, [apiStatus]);

  useEffect(() => {
    if (center || !placesLib) {
      return;
    }

    let cancelled = false;

    async function resolveOfficeCoordinatesViaPlaces() {
      setResolvingLocation(true);
      setLookupFailed(false);

      for (const query of ADDRESS_SEARCH_QUERIES) {
        try {
          const response = await placesLib!.Place.searchByText({
            textQuery: query,
            fields: ['location', 'id'],
            region: 'IN',
            language: 'en',
            maxResultCount: 1,
          });
          const loc = response?.places?.[0]?.location;
          if (loc && !cancelled) {
            setCenter({lat: loc.lat(), lng: loc.lng()});
            setResolvingLocation(false);
            return;
          }
        } catch (err: unknown) {
          const msg = err instanceof Error ? err.message : String(err);
          if (
            (msg.includes('RESOURCE_EXHAUSTED') ||
              msg.includes('OVER_QUERY_LIMIT') ||
              msg.includes('429')) &&
            typeof window !== 'undefined'
          ) {
            window.dispatchEvent(new CustomEvent('gmp-quota-exceeded'));
          }
        }
      }

      if (!cancelled) {
        setResolvingLocation(false);
        setLookupFailed(true);
      }
    }

    void resolveOfficeCoordinatesViaPlaces();

    return () => {
      cancelled = true;
    };
  }, [center, placesLib]);

  if (
    apiStatus === APILoadingStatus.FAILED ||
    apiStatus === APILoadingStatus.AUTH_FAILURE
  ) {
    return (
      <MapFallbackCard message="Interactive map preview is temporarily unavailable. Use Get Directions to view the exact office location on Google Maps." />
    );
  }

  if (lookupFailed || (!resolvingLocation && !center)) {
    return (
      <MapFallbackCard message="Use Get Directions to open our Risali, Bhilai office directly in Google Maps." />
    );
  }

  if (!center) {
    return (
      <div
        className="flex h-[320px] sm:h-[380px] lg:h-[440px] w-full items-center justify-center bg-[#0D0D0D] text-sm text-[#969696]"
        aria-busy="true"
      >
        Loading interactive Klyia Technology office map...
      </div>
    );
  }

  return (
    <GoogleMap
      mapId="DEMO_MAP_ID"
      defaultCenter={center}
      defaultZoom={17}
      gestureHandling="cooperative"
      clickableIcons={false}
      mapTypeControl={false}
      streetViewControl={true}
      fullscreenControl={true}
      internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
      className="w-full h-[320px] sm:h-[380px] lg:h-[440px]"
    >
      <AdvancedMarker
        ref={markerRef}
        position={center}
        title={BRAND.name}
        clickable={true}
        onClick={() => setInfoWindowOpen(true)}
        anchorPoint={AdvancedMarkerAnchorPoint.BOTTOM}
      >
        <div className="flex flex-col items-center cursor-pointer select-none group">
          <div className="inline-flex items-center gap-1.5 rounded-full border-2 border-white bg-[#D41514] px-3 py-1.5 text-xs font-bold tracking-wide text-white shadow-[0_6px_18px_rgba(0,0,0,0.45)] transition-transform group-hover:scale-105">
            <span className="h-2 w-2 rounded-full bg-white shrink-0" aria-hidden="true" />
            <span>{BRAND.name}</span>
          </div>
          <div
            className="h-0 w-0 border-x-[7px] border-t-[9px] border-x-transparent border-t-[#D41514] drop-shadow"
            aria-hidden="true"
          />
        </div>
      </AdvancedMarker>

      {infoWindowOpen && marker && (
        <InfoWindow
          anchor={marker}
          maxWidth={300}
          onCloseClick={() => setInfoWindowOpen(false)}
        >
          <div className="p-1 text-left max-w-[260px]">
            <p className="text-sm font-bold text-[#111111] leading-snug">
              {BRAND.name}
            </p>
            <p className="mt-1.5 text-xs text-[#444444] leading-relaxed">
              {BRAND.address.full}
            </p>
            <div className="mt-3">
              <a
                href={BRAND.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get Directions to Klyia Technology office in Risali, Bhilai on Google Maps"
                className="inline-flex items-center gap-1.5 rounded-md bg-[#D41514] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#b51110] transition-colors no-underline"
              >
                <Navigation className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                <span>Get Directions</span>
                <ExternalLink className="w-3 h-3 shrink-0" aria-hidden="true" />
              </a>
            </div>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

export function OfficeGoogleMap() {
  const [mounted, setMounted] = useState(false);
  const [loadingConfig, setLoadingConfig] = useState(true);
  const [apiKey, setApiKey] = useState<string>(() =>
    ((import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string | undefined) || '').trim(),
  );
  const [initialCenter, setInitialCenter] = useState<LatLngLiteral | null>(null);

  useEffect(() => {
    setMounted(true);
    let active = true;

    async function loadOfficeLocationConfig() {
      try {
        const res = await fetch('/api/office-location', {
          headers: {Accept: 'application/json'},
        });
        const data = (await res.json().catch(() => null)) as OfficeLocationApiResponse | null;

        if (res.status === 429 || data?.quotaExceeded) {
          window.dispatchEvent(new CustomEvent('gmp-quota-exceeded'));
        }

        if (!active) {
          return;
        }

        if (data?.mapsApiKey && !apiKey) {
          setApiKey(data.mapsApiKey.trim());
        }
        if (
          data?.center &&
          typeof data.center.lat === 'number' &&
          typeof data.center.lng === 'number'
        ) {
          setInitialCenter(data.center);
        }
      } catch {
        // Handled cleanly by fallback if neither key nor coordinates resolve
      } finally {
        if (active) {
          setLoadingConfig(false);
        }
      }
    }

    void loadOfficeLocationConfig();

    return () => {
      active = false;
    };
  }, []);

  if (!mounted || loadingConfig) {
    return (
      <div
        className="flex h-[320px] sm:h-[380px] lg:h-[440px] w-full items-center justify-center bg-[#0D0D0D] text-sm text-[#969696]"
        aria-busy="true"
      >
        Loading interactive Klyia Technology office map...
      </div>
    );
  }

  if (!apiKey) {
    return (
      <MapFallbackCard message="Use Get Directions to open our Risali, Bhilai office directly in Google Maps." />
    );
  }

  return (
    <APIProvider
      apiKey={apiKey}
      region="IN"
      language="en"
      libraries={['marker', 'places']}
    >
      <OfficeMapCanvas initialCenter={initialCenter} />
    </APIProvider>
  );
}
