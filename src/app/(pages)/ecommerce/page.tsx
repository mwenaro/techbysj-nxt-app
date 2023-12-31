'use client';
import {
  ProductCategorySidebar,
  ProductGrid,
} from '@/app/(components)/organisms/ecommerce';
import { Product } from '@/app/(components)/organisms/ecommerce/types';
import { strCapitalize } from '@/utlis';

import { useEffect, useState } from 'react';

const Thobe = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const productCategories = ['all', 'thobes', 'shirts'];
  const [products, setProducts] = useState<Product[]>([]);

  // const products = [
  //     {
  //         id : 1,
  //         name: "Sweet Shirt",
  //         category : 'shirt',
  //         price: 30,
  //         color:'white',
  //         sizes: ['m','l','xl'],
  //         images:['','']

  //     },
  //     {
  //         id : 2,
  //         name: "Favorite Thobe",
  //         category : 'thobe',
  //         armStyle:'normal',
  //         price: 30,
  //         color:'white',
  //         sizes: ['m','l','xl'],
  //         images:['','']

  //     },
  //     {
  //         id : 3,
  //         name: "Favorite Jacket",
  //         category : 'jacket',
  //         price: 40,
  //         color:'white',
  //         sizes: ['m','l','xl'],
  //         images:['','']

  //     },

  // ]
  // let products:Product[] = [];

  // console.log(products);

  useEffect(() => {
    async function getData() {
      const data: Product[] = await (await fetch('/api/product')).json();
      setProducts(data);
    }

    getData();

    // if (activeCategory === 'all') {
    //   setProducts(_products);
    //   return;
    // }
    // setProducts(_products);
    // setProducts(
    //   products.filter(
    //     (p) =>
    //       p.category.trim().toLowerCase() ===
    //       activeCategory.trim().toLocaleLowerCase()
    //   )
    // );
  }, [activeCategory]);

  return (
    <div className="w-full flex justify-between gap-4 py-4 px-8">
      <ProductCategorySidebar
        setActiveCategory={setActiveCategory}
        activeCategory={activeCategory}
        productCategories={productCategories}
      />
      <ProductGrid
        setProducts={setProducts}
        activeCategory={activeCategory}
        products={products}

       
      />
      <div className="hidden sm:flex flex-col w-1/6">
        <h3 className="text-xl font-bold p-2 ">Sort By</h3>
        {[
          'relevance',
          'latest arrivals',
          'price: High to low',
          'price: Low to High',
        ].map((item: string, indx) => (
          <p key={indx} className={`${indx === 0 ? 'font-semibold' : ''}`}>
            {strCapitalize(item)}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Thobe;
