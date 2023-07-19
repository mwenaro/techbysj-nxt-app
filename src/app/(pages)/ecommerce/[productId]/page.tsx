import { Typography } from '@/app/(components)';
import {
  ProductCard,
  ProductGrid,
} from '@/app/(components)/organisms/ecommerce';
import { Product } from '@/app/(components)/organisms/ecommerce/types';
import { HOST_PATH } from '@/utlis/next_host';

const getData = async (path: string, id: any = null) =>
  await (
    await fetch(`${HOST_PATH}api/${path}/${id === null ? '' : id}`)
  ).json();
let product: Product | any = {},
  products: Product[] | any = [];

export default async function Product({
  params: { productId },
}: {
  params: { productId: string | number };
}) {
  try {
    const [prod, prods] = await Promise.all([
      getData('product', productId),
      getData('product'),
    ]);
    (products = prods), (product = prod);
  } catch (error: any) {
    console.log(error.message);
  }

  return (
    <div className="w-full ">
      {/* upper section */}
      <div className="flex justify-between">
        <div className="flex flex-col w-8/12  my-5">
          <ProductCard {...product} showDetails={true} detailsTop={true} />

          {/* props prev */}

          <div className="w-full flex justify-between">
            {'1 2 3 4'.split(' ').map((p) => (
              <div key={p} className="border  border-black">
                <ProductCard
                  {...product}
                  showDetails={false}
                  className={
                    +p == 1
                      ? ' bg-opacity-80 bg-slate-200'
                      : 'bg-slate-700 bg-opacity-20'
                  }
                />
              </div>
            ))}
          </div>
        </div>
        <div className="w-4/12">
          <Typography variant="h3">Props</Typography>
        </div>
      </div>
      {/* lower section */}
      <div className="">
        <Typography variant="h3">Related Products</Typography>
        <ProductGrid
          products={products}
          activeCategory={product.category}
          className={' md:grid-cols-4 my-2'}
        />
      </div>
    </div>
  );
}
