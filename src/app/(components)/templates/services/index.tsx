import { Service } from '@/types';
import { SectionSubTitle, SectionTitle, SectionWrapper } from '../../organisms';
import ServiceCard from './Servicecard';
interface ServicesSectionProps {
  services?: any[];
  children?: React.ReactNode;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({
  children,
  services,
}) => (
  <SectionWrapper sectionId="services" className="">
    <div className="max-w-xl mb-5 md:mx-auto text-center lg:max-w-2xl md:mb-6">
      <SectionTitle className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
        <span className="relative inline-block">
          <span className="relative">Services</span>
        </span>
      </SectionTitle>
      {/* <SectionSubTitle className="text-base text-gray-700 md:text-lg">
        Our services are quality
      </SectionSubTitle> */}
    </div>
    <div className="grid gap-8 row-gap-10 lg:grid-cols-2">
      {services !== undefined && services.length > 0 ? (
        <>
          {services.map((service: Service, indx: number) => (
            <ServiceCard key={indx} {...service} />
          ))}
        </>
      ) : (
        children
      )}
    </div>
  </SectionWrapper>
);

export default ServicesSection;
