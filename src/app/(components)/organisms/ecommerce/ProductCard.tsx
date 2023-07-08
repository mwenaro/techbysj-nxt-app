// "use client"

import { strCapitalize } from '@/utlis';
import { Img, Typography } from '../../atoms';
import { PropductProp } from './types';
// import { useEffect } from 'react';

export default function ProductCard({
  children,
  name,
  category,
  price,
  imgSrc,
  className,
  showDetails = true,
  detailsTop = false,
}: PropductProp & {
  showDetails?: boolean;
  detailsTop?: boolean;
  children?: React.ReactNode;
}) {
  // useEffect(() => {

  // }, [name]);
  return (
    <div
      className={`py-4 px-8  flex flex-col justify-center items-center relative ${className ? className : 'bg-slate-300'}`}
    >
      <div className="max-w-[400px] mx-auto">
        <Img src={`${imgSrc ? imgSrc : '/assets/images/logo.png'}`} alt="" />
      </div>
      {!showDetails ? (
        ''
      ) : (
        <>
          <div
            className={`${detailsTop ? 'absolute top-0 left-0 z-20' : ''} `}
          >
            <Typography variant="h5" className="px-2">
              {strCapitalize(name)}
            </Typography>
            <Typography className="px-2" variant="h6">
              Kshs. {+price * 100}
            </Typography>
            <Typography className="px-2" variant="p">
              Category : {category}
            </Typography>
          </div>
        </>
      )}
    </div>
  );
}
