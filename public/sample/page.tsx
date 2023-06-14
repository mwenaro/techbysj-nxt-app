import React from 'react';
import { CoursesSection, HeroSection } from '../(components)';
import AboutSection from '../(components)/templates/about';
import ServicesSection from '../(components)/templates/services';
import { ABOUT_SECTION_IMAGE } from '@/assets/images';
import { OUR_SERVICES } from '@/constants/SERVICES';
import GallerySection from '../(components)/templates/gallery';

export const metadata = {
  title: 'Techbysj - Sample page',
  description: 'Sample page for the site',
};

export default function page() {
  return (
    <>
      <HeroSection />

      <AboutSection imageUrl={ABOUT_SECTION_IMAGE} />

      <ServicesSection services={OUR_SERVICES}></ServicesSection>
      <CoursesSection />
      <GallerySection />
    </>
  );
}
