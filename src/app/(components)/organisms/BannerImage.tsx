import { PropsWithChildren } from 'react';
import { Img } from '../atoms';

interface BannerImageProps extends PropsWithChildren {
  imageSrc: string;
}

const BannerImage: React.FC<BannerImageProps> = ({ imageSrc, children }) => {
  return (
    <div className="w-full h-full relative overflow-hidden">
      <Img src={imageSrc} alt="Section Image" className="object-cover" />
      {children ? (
        <div className="w-full h-full absolute inset-0 top-0 left-0 bottom-0 right-0">
          {children}
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default BannerImage;
