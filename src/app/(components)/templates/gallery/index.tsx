
import { title } from 'process';
import { SectionTitle, SectionWrapper } from '../../organisms';
import Gallery2 from '../../organisms/Gallery2';
import Gallery from '../../organisms/Gallery2';



interface GallerySectionProps {
  title?:string
}

const GallerySection: React.FC<GallerySectionProps> = ({ title}) => {
  return (
    <SectionWrapper sectionId="gallery">
      <SectionTitle className="text-center text-4xl p-10 ">
        {title||'Gallery'}
      </SectionTitle>
      {/* <SectionSubTitle className="text-center  text-black p-6">
        Imagine it, create it
      </SectionSubTitle> */}
      {/* <Gallery />
       */}
       <Gallery2 />
     
    </SectionWrapper>
  );
};

export default GallerySection;
