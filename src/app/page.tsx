import React from "react";
import {
  AboutSection,
  CoursesSection,
  Herosection,
  ServicesSection,
} from "./components/templates";

export default function page() {
  return (
    <>
      <Herosection />
      <AboutSection />
      <ServicesSection />
      <CoursesSection />
      <div></div>
    </>
  );
}
