import React from "react";
import { CoursesSection, HeroSection, Icon } from "../(components)";
import AboutSection from "../(components)/templates/about";
import ServicesSection from "../(components)/templates/services";
import { getImage } from "@/assets/images";

export default function page() {
  return (
    <>
      <HeroSection />
      <AboutSection imageUrl={getImage("/binary.png")} />
      <ServicesSection
        services={[
          {
            title: "Web developement",
            icon: <Icon variant="web" />,
            description: "We thoroughly cover html, css, javascript",
          },
        ]}
      >
        {"Saum Mwero Hussien Yusra Amal Rashid Mangale Amina"
          .split(" ")
          .map((item) => (
            <p>{item}</p>
          ))}
      </ServicesSection>
      <CoursesSection />
    </>
  );
}
