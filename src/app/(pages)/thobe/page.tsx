"use client"
import { ProductCategorySidebar, ProductGrid } from '@/app/(components)/organisms/ecommerce';
import { strCapitalize } from '@/utlis';
import { useState } from 'react';

export interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    color: string;
    sizes: string[];
    images: string[];
    armStyle?: string;
}


const Thobe = () => {
    const[activeCategory, setActiveCategory] = useState<string>('all');
    const productCategories = ['all','thobes', 'shirts']

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
    const products:Product[] = [];

// Generate 20 random products
for (let i = 1; i <= 20; i++) {
    const product: Product = {
        id: i,
        name: `Product ${i}`,
        category: getRandomCategory(),
        price: getRandomPrice(),
        color: getRandomColor(),
        sizes: getRandomSizes(),
        images: getRandomImages()
    };

    if (product.category === 'thobe') {
        product.armStyle = getRandomArmStyle();
    }

    products.push(product);
}

// Function to get a random category
function getRandomCategory() {
    const categories = ['shirt', 'thobe', 'jacket'];
    return categories[Math.floor(Math.random() * categories.length)];
}

// Function to get a random price between 20 and 100
function getRandomPrice() {
    return Math.floor(Math.random() * 81) + 20;
}

// Function to get a random color
function getRandomColor() {
    const colors = ['white', 'black', 'blue', 'red', 'green'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Function to get random sizes
function getRandomSizes() {
    const sizes = ['m', 'l', 'xl'];
    const randomSizes = [];
    const numSizes = Math.floor(Math.random() * 3) + 1;

    for (let i = 0; i < numSizes; i++) {
        const size = sizes[Math.floor(Math.random() * sizes.length)];
        randomSizes.push(size);
    }

    return randomSizes;
}

// Function to get random image URLs
function getRandomImages() {
    const images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg'];
    const randomImages = [];
    const numImages = Math.floor(Math.random() * 4) + 1;

    for (let i = 0; i < numImages; i++) {
        const image = images[Math.floor(Math.random() * images.length)];
        randomImages.push(image);
    }

    return randomImages;
}

// Function to get random arm style for thobes
function getRandomArmStyle() {
    const armStyles = ['normal', 'fitted', 'wide'];
    return armStyles[Math.floor(Math.random() * armStyles.length)];
}

// console.log(products);

  return (
        
      <div className='w-full flex justify-between gap-4 py-4 px-8'>
      <ProductCategorySidebar
      setActiveCategory = {setActiveCategory}
      activeCategory = {activeCategory}
       productCategories={productCategories}/>
      <ProductGrid  products = {products} />
      <div className='hidden sm:flex flex-col w-1/6'>
        <h3 className='text-xl font-bold p-2 '>Sort By</h3>
        {
            ['relevance', 'latest arrivals', 'price: High to low', 'price: Low to High']
            .map((item:string,indx)=><p key={indx} className={`${indx===0? 'font-semibold':''}`}>{strCapitalize(item)}</p>)
        }
      </div>

      </div>
    
  );
};

export default Thobe;
