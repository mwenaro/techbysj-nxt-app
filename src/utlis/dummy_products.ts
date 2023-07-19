import { Product } from "@/app/(components)/organisms/ecommerce/types";


let _products: Product[] = [];
// Generate 20 random products
for (let i = 1; i <= 20; i++) {
  const product: Product = {
    id: i,
    name: `Product ${i}`,
    category: getRandomCategory(),
    price: getRandomPrice(),
    color: getRandomColor(),
    sizes: getRandomSizes(),
    images: getRandomImages(),
  };

  if (product.category === 'thobes') {
    product.armStyle = getRandomArmStyle();
  }
  _products.push(product);
}

// Function to get a random category
function getRandomCategory() {
  const categories = ['shirts', 'thobes', 'jackets'];
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

export {_products as products}