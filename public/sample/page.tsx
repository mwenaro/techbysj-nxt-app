import { HeroSection } from '@/app/(components)'
import AboutSection from '@/app/(components)/templates/about'
import CoursesSection from '@/app/(components)/templates/courses'
import GallerySection from '@/app/(components)/templates/gallery'
import ServicesSection from '@/app/(components)/templates/services'
import { ABOUT_SECTION_IMAGE } from '@/assets/images'
import { OUR_SERVICES } from '@/constants/SERVICES'

export const metadata = {
  title: 'Techbysj - Sample page',
  description: 'Sample page for the site'
}

export default function page() {
  return (
    <>
      <HeroSection />

      <AboutSection imageUrl={ABOUT_SECTION_IMAGE} />

      <ServicesSection services={OUR_SERVICES}></ServicesSection>
      <CoursesSection />
      <GallerySection />
    </>
  )
}
