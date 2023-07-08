'use client';

import { ReactNode, useEffect } from 'react';
import ProductCard from './ProductCard';
import Link from 'next/link';
import { boolean } from 'yup';

const ProductGrid = ({
  detailsTop = false,
  className,
  products,
  activeCategory,
  setProducts,
}: {
  setProducts?: (products: any[]) => void;
  products: any[];
  activeCategory: string;
  className?: string;
  children?: ReactNode;
  detailsTop?: boolean;
}) => {
  useEffect(() => {}, [activeCategory]);
  return (
    <div
      className={`flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ${className}`}
    >
      {
        (products && activeCategory != 'all'
          ? products.filter(
              (p) =>
                p.category.trim().toLowerCase() ===
                activeCategory.trim().toLocaleLowerCase()
            )
          : products
        ).map((product: any, indx) => (
          <Link href={`/ecommerce/${product.id}`} key={indx}>
            <ProductCard {...product} detailsTop ={detailsTop} />
          </Link>
        ))
        // {children}
      }
    </div>
  );
};

export default ProductGrid;
