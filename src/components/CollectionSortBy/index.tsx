import { useId } from 'react';
import { Product } from '../../models';
import DropdownSelect from '../DropdownSelect';
import { Container } from './style';
import { SortOption, SortOrder, SortProperty } from './types';

const SORT_BY: SortOption[] = [
  {
    value: 'title_asc',
    label: 'Name Ascending',
  },
  {
    value: 'title_desc',
    label: 'Name Descending',
  },
  {
    value: 'price_asc',
    label: 'Price Ascending',
  },
  {
    value: 'price_desc',
    label: 'Price Descending',
  },
];
const CollectionSortBy = ({
  onSortProducts,
  products,
}: {
  products: Product[];
  onSortProducts: (property: keyof Product, order: 'asc' | 'desc') => void;
}) => {
  return (
    <Container>
      <p>Sort by:</p>
      <DropdownSelect
        instanceId={useId()}
        onChange={(option: { value: string; label: string } | null) => {
          if (!option?.value) return onSortProducts('title', 'asc');

          const [sortProperty, sortOrder] = option.value.split('_') as [
            SortProperty,
            SortOrder
          ];

          return onSortProducts(sortProperty, sortOrder);
        }}
        options={SORT_BY}
        defaultValue={SORT_BY[0]}
      />
    </Container>
  );
};
export default CollectionSortBy;
