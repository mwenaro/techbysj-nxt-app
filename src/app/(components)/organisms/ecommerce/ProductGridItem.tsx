import { strCapitalize } from '@/utlis';
import { Img, Typography } from '../../atoms';

export default function ProductGridItem({
  name,
  category,
  price,
  imgSrc,
  className
}: {
  name: string;
  category: string;
  price: string | number;
  className?:string
  imgSrc?:string
}) {
  return (
    <div className={`py-4 px-8 bg-slate-200 flex flex-col justify-center items-center relative${className}`}>
      <Img src={`${imgSrc? imgSrc :'/assets/images/logo.png'}`} alt="" />
      <div>
        <Typography variant='h5' className='px-2'>{strCapitalize(name)}</Typography>
        <Typography variant='h6'>Kshs. {+price * 100}</Typography>
      </div>
    </div>
  );
}
