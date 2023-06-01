import { LOGO_PIC } from "@/assets/images";
import { Img } from "../atoms";

export default function Logo({className}:{className?:string}) {
    
    return  <Img src={LOGO_PIC} alt={`logo image`}  className={`h-full aspect-auto object-contain ${className}`} />
}