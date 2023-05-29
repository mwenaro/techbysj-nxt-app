import Image   from "next/image";

interface ImageProps {
  src: string;
  alt: string;
  className?: string;

}

const Img: React.FC<ImageProps> = ({ src, alt, className }) => (
  <Image src={src} alt={alt}  width ={100} height={100} className={`w-full aspect-auto ${className}`}/>
);

export default Img;
