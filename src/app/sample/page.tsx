import React from 'react';
import { CoursesSection, HeroSection, Icon } from '../(components)';
import AboutSection from '../(components)/templates/about';
import ServicesSection from '../(components)/templates/services';
import { ABOUT_SECTION_IMAGE, getImage } from '@/assets/images';
import { OUR_SERVICES } from '@/constants/SERVICES';
import GallerySection from '../(components)/templates/gallery';

export default function page() {
  return (
    <>
      <HeroSection />

      {/* <AboutSection imageUrl={getImage("/binary.png")} /> */}
      <AboutSection imageUrl={ABOUT_SECTION_IMAGE} />

      <ServicesSection services={OUR_SERVICES}></ServicesSection>
      <CoursesSection />
      <GallerySection />
    </>
  );
}
