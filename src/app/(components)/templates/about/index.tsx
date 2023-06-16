import { Icon, Img, Typography } from '../../atoms';
import { SectionSubTitle, SectionTitle, SectionWrapper } from '../../organisms';

import Mission from './Mission';

interface AboutSectionProps {
  imageUrl: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ imageUrl }) => {
  return (
    <SectionWrapper sectionId="about" className='max-w-[1000px]'>
      <SectionTitle className="text-center text-4xl p-2 md:p-10 ">
        About us
      </SectionTitle>
      <Typography variant="p" className="text-lg max-w-[1000px] mx-auto  mb-4">
        TechBySJ Empowerment Organization is a non-profit organization dedicated
        to empowering individuals, Schools and Corprates through technology. We
        believe that access to technology and digital literacy skills are
        essential for personal and professional growth in the modern world. Our
        organization strives to bridge the digital divide and create
        opportunities for underserved communities to thrive in the digital age.
      </Typography>
     
      <div className="w-full flex flex-col md:flex-row py-4  md:gap-2">
        <Mission
          className=" w-full md:w-1/2 mt-2 px-2 py-4"
          title="Our mission"
          // icon={<Icon variant="arrowRight" />}
          description="A daily commitment to serve our clients through passion, knowledge, and excellence."
        />
        <Mission
          className=" w-full md:w-1/2"
          title="Our vision"
          // icon={<Icon variant="arrowRight" />}
          description="To be known and recommended for optimizing and streamlining businesses by using digital and technical innovation."
        />
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
