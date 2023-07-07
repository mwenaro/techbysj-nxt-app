import { ReactNode } from 'react';
import ProductGridItem from './ProductGridItem';

const ProductGrid = (
  { products }: { products: any[] },
  children?: ReactNode
) => (
  <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {
      products.map((product: any, indx) => (
        <ProductGridItem key={indx} {...product} />
      ))
      // {children}
    }
  </div>
);

export default ProductGrid
