import { Product } from './Product';
export interface CartLineItem extends Product {
  quantity: number;
  variants: {
    [key: string]: number;
  };
}
