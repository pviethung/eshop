import { Product } from './../../models/Product';

export type SortProperty = keyof Product;
export type SortOrder = 'asc' | 'desc';

export interface SortOption {
  value: `${SortProperty}_${SortOrder}` | 'default';
  label: string;
}
