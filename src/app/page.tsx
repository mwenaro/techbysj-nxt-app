import React from 'react';
import { ABOUT_SECTION_IMAGE, getImage } from '@/assets/images';
import { OUR_SERVICES } from '@/constants/SERVICES';
import { ContactSection, HeroSection } from './(components)';
import AboutSection from './(components)/templates/about';
import ServicesSection from './(components)/templates/services';
import CoursesSection from './(components)/templates/courses';
import GallerySection from './(components)/templates/gallery';
import RegistrationForm from './(components)/templates/course_registration';

export default function page() {
  return (
    <>
      <HeroSection />

      {/* <AboutSection imageUrl={getImage("/binary.png")} /> */}
      <AboutSection imageUrl={ABOUT_SECTION_IMAGE} />
      <GallerySection  title='Our Activities'/>
      <ServicesSection services={OUR_SERVICES}></ServicesSection>
      <CoursesSection />
      <ContactSection />
      
      <section id="booking">
        <RegistrationForm />
      </section>
    </>
  );
}
