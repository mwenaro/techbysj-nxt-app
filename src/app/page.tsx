import React from "react";
import { ContactSection, CoursesSection, HeroSection, ServicesSection } from "./(components)";
import AboutSection from "./(components)/templates/about";

export default function Page() {
  return (
    <>
      <HeroSection />
      <AboutSection imageUrl="/favicon.ico" />
      <ServicesSection />
      <CoursesSection />
      <ContactSection />
    </>
  );
}
