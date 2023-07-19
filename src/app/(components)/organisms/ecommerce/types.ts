export interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    color: string;
    sizes: string[];
    images: string[];
    imgSrc?:string
    armStyle?: string;
  }

  export type PropductProp = Product &{
    className?:string
    children?: React.ReactNode
  }