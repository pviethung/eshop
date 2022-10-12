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
  onSortProducts: (products: Product[]) => void;
}) => {
  return (
    <Container>
      <p>Sort by:</p>
      <DropdownSelect
        instanceId={useId()}
        onChange={(option: { value: string; label: string } | null) => {
          if (!option?.value) return onSortProducts(products);

          const [sortProperty, sortOrder] = option.value.split('_') as [
            SortProperty,
            SortOrder
          ];

          const sortedProducts = [
            ...products.sort((a, b) => {
              if (a[sortProperty] > b[sortProperty]) return 1;
              if (a[sortProperty] < b[sortProperty]) return -1;
              return 0;
            }),
          ];
          if (sortOrder === 'desc') sortedProducts.reverse();
          return onSortProducts(sortedProducts);
        }}
        options={SORT_BY}
        defaultValue={SORT_BY[0]}
      />
    </Container>
  );
};
export default CollectionSortBy;
