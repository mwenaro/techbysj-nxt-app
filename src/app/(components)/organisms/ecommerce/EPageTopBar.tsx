import { strCapitalize } from '@/utlis';
import Link from 'next/link';
import React from 'react'
import { FaSearch } from 'react-icons/fa';
import { FiShoppingBag } from 'react-icons/fi';

export default function EPageTopBar({itemsInShoppingBag,productCategories }:{itemsInShoppingBag?:string|number, productCategories:string[]}) {


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
                <Link href={`${item == 'all' ? '/thobe/':`/thobe/${item}` }`}>{strCapitalize(item)}</Link>
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
  