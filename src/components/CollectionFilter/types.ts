import { Product } from './../../models/Product';
export interface FilterTypes {
  price: {
    min: number;
    max: number;
  };
  sort: {
    property: keyof Product;
    order: 'asc' | 'desc';
  };
  size: string;
  color: string;
  vendor: string;
  type: string | null;
}
