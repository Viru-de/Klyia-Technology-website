import React from 'react';
import {AboutPreview} from '../components/home/AboutPreview.tsx';
import {CTASection} from '../components/home/CTASection.tsx';
import {HeroSection} from '../components/home/HeroSection.tsx';
import {HomeBlogPreviewSection} from '../components/home/HomeBlogPreviewSection.tsx';
import {HomeFaqSection} from '../components/home/HomeFaqSection.tsx';
import {HomeFeaturedIndustriesSection} from '../components/home/HomeFeaturedIndustriesSection.tsx';
import {HomeSeoGeoAeoSection} from '../components/home/HomeSeoGeoAeoSection.tsx';
import {HomeTechStackSection} from '../components/home/HomeTechStackSection.tsx';
import {IndustriesPreview} from '../components/home/IndustriesPreview.tsx';
import {LocationsSection} from '../components/home/LocationsSection.tsx';
import {ProcessSection} from '../components/home/ProcessSection.tsx';
import {ServicesPreview} from '../components/home/ServicesPreview.tsx';
import {SolutionsPreview} from '../components/home/SolutionsPreview.tsx';
import {TrustSection} from '../components/home/TrustSection.tsx';
import {WhyChooseUs} from '../components/home/WhyChooseUs.tsx';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <AboutPreview />
      <ServicesPreview />
      <HomeSeoGeoAeoSection />
      <IndustriesPreview />
      <HomeFeaturedIndustriesSection />
      <SolutionsPreview />
      <HomeTechStackSection />
      <WhyChooseUs />
      <ProcessSection />
      <HomeBlogPreviewSection />
      <HomeFaqSection />
      <LocationsSection />
      <CTASection />
    </>
  );
}
