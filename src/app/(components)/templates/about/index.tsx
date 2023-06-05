import { Icon, Img } from '../../atoms';
import { SectionSubTitle, SectionTitle, SectionWrapper } from '../../organisms';

import Mission from './Mission';

interface AboutSectionProps {
  imageUrl: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ imageUrl }) => {
  return (
    <SectionWrapper sectionId="about">
      <SectionTitle className="text-center text-4xl p-10 ">
        About us
      </SectionTitle>
      <SectionSubTitle className="text-center  text-black p-6">
        Imagine it, create it
      </SectionSubTitle>
      <div className="w-full relative h-[30rem] rounded-xl">
        <Img
          src={imageUrl}
          className="w-3/4 mx-auto block rounded h-full object-cover"
          alt=""
        />
      </div>
      <Mission
        title="Our mission"
        icon={<Icon variant="arrowRight" />}
        description="A daily commitment to serve our clients through passion, knowledge, and excellence."
      />
      <Mission
        title="Our vision"
        icon={<Icon variant="arrowRight" />}
        description="To be known and recommended for optimizing and streamlining businesses by using digital and technical innovation."
      />
    </SectionWrapper>
  );
};

export default AboutSection;
