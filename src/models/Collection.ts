import { Product } from './Product';

export interface Collection {
  title: string;
  products: Product[];
  id: string;
}
