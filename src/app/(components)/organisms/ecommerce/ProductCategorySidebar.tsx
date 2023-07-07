import { strCapitalize } from '@/utlis';
import Link from 'next/link';
import { Typography } from '../../atoms';

export default function ProductCategorySidebar({
  productCategories,
  activeCategory, setActiveCategory
}: {
  productCategories: string[];
  activeCategory: string
setActiveCategory : (category:string)=>void
}) {
  return (
    <div className="hidden w-1/6 sm:flex flex-col items-center">
      <Typography variant='h4' className="text-xl font-bold p-2 ">Collections</Typography>
      {/* menu */}
      {/* <ul className="flex flex-col justify-between gap-3">
        {productCategories.map((item: string, indx) => (
          <li key={indx} className="hover:font-bold hover:underline">
            <Link href={`${item == 'all' ? '/thobe/':`/thobe/${item}` }`}>{strCapitalize(item)}</Link>
          </li>
        ))}
      </ul> */}
      <ul className="flex flex-col justify-between gap-3">
        {productCategories.map((item: string, indx) => (
          <li key={indx} className="hover:font-bold hover:underline">
            <span onClick={()=>setActiveCategory(item)}>{strCapitalize(item)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
