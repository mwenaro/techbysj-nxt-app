import { Img } from '@/app/(components)';
import { strCapitalize } from '@/utlis';
import Link from 'next/link';
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import {FiShoppingBag} from 'react-icons/fi'

const TopBar = ({itemsInShoppingBag,productCategories }:{itemsInShoppingBag?:string|number, productCategories:string[]}) => {
  return (
    <div className="w-full flex justify-between items-center px-4 py-8 ">
      <div className='flex items-center gap-8'>
        <Link href={'/thobe'}>
        <div>Logo</div>
        </Link>
        
        {/* menu */}
        <ul className="flex justify-between gap-3">
          {productCategories.map((item: string, indx) => (
            <li key={indx} className='hover:font-bold hover:underline'>
              <Link href={`/thobe/${item}`}>{strCapitalize(item)}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Search box */}
      <div className="hidden sm:flex relative min-w-[40%]">
        <input placeholder="search for products" className='w-full py-2 px-4 rounded-md outline outline-1 outline-black' />

        {/* search icon */}
        <i className='absolute top-3 right-4 '><FaSearch /></i>
      </div>

      {/* cart icons */}
      <div className='flex items-center text-4xl relative'>
       
        <FiShoppingBag />

        <span className='text-sm text-center absolute -bottom-3 left-2 rounded-full  bg-yellow-400 h-4 w-4'>{itemsInShoppingBag|| '1'}</span>
      </div>
    </div>
  );
};


const ProductSideBar = ({productCategories}:{productCategories:string[]})=>
    <div className='hidden w-1/6 sm:flex flex-col items-center'>
<h3 className='text-xl font-bold p-2 '>Collections</h3>
{/* menu */}
<ul className="flex flex-col justify-between gap-3">
          {productCategories.map((item: string, indx) => (
            <li key={indx} className='hover:font-bold hover:underline'>
              <Link href={`/thobe/${item}`}>{strCapitalize(item)}</Link>
            </li>
          ))}
        </ul>

    </div>



// ProductGridItem
const ProductGridItem = ({name, category,price}:{name:string, category:string, price:string|number})=><div className='py-4 px-8 bg-slate-200 flex flex-col justify-center items-center'>
<Img src='/assets/images/logo.png' alt='' />
<div>
    <h4>{strCapitalize(name)}</h4>
    <h6>{price}</h6>
</div>
</div>
// ProductsGrid
const ProductGrid = ({products}:{products:any[]})=><div className='flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
{
products.map((product:any,indx)=><ProductGridItem  key={indx} {...product} />)
}
</div>

const Thobe = () => {
    const productCategories = ['all','thobes', 'shirts']
    const products = [
        {
            id : 1,
            name: "Sweet Shirt",
            category : 'shirt',
            price: 30,
            color:'white',
            sizes: ['m','l','xl'],
            images:['','']

        },
        {
            id : 2,
            name: "Favorite Thobe",
            category : 'thobe',
            armStyle:'normal',
            price: 30,
            color:'white',
            sizes: ['m','l','xl'],
            images:['','']

        },
        {
            id : 3,
            name: "Favorite Jacket",
            category : 'jacket',
            price: 40,
            color:'white',
            sizes: ['m','l','xl'],
            images:['','']

        },

    ]
  return (
    <div className="pt-32 w-full">
      <TopBar productCategories={productCategories}/>
      <div className='w-full flex justify-between gap-4 py-4 px-8'>
      <ProductSideBar productCategories={productCategories}/>
      <ProductGrid products = {products} />
      <div className='hidden sm:flex flex-col w-1/6'>
        <h3 className='text-xl font-bold p-2 '>Sort By</h3>
        {
            ['relevance', 'latest arrivals', 'price: High to low', 'price: Low to High']
            .map((item:string,indx)=><p key={indx} className={`${indx===0? 'font-semibold':''}`}>{strCapitalize(item)}</p>)
        }
      </div>

      </div>
    </div>
  );
};

export default Thobe;
