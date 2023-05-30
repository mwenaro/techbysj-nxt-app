import React from 'react'
import { AboutSection, CoursesSection, ServicesSection } from './components/templates'
import HeroSection from './components/templates/HeroSection'

export default function page() {
  return (
    <>
    
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <CoursesSection />
    </>
  )
}
