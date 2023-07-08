// "use client"

import { strCapitalize } from '@/utlis';
import { Img, Typography } from '../../atoms';
import ProductCard from './ProductCard';
import { PropductProp } from './types';
// import { useEffect } from 'react';

export default function ProductGridItem(product: PropductProp) {
  // useEffect(() => {

  // }, [name]);
  return <ProductCard {...product} showDetails={true} />;
}
