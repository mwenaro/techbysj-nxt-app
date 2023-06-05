
import { SectionTitle, SectionWrapper } from '../../organisms';
import Gallery from '../../organisms/Gallery';



interface GallerySectionProps {
  imageUrl?: string;
}

const GallerySection: React.FC<GallerySectionProps> = ({ imageUrl }) => {
  return (
    <SectionWrapper sectionId="gallery">
      <SectionTitle className="text-center text-4xl p-10 ">
        Gallery
      </SectionTitle>
      {/* <SectionSubTitle className="text-center  text-black p-6">
        Imagine it, create it
      </SectionSubTitle> */}
      <Gallery />
     
    </SectionWrapper>
  );
};

export default GallerySection;
