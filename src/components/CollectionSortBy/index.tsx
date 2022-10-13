import { useId } from 'react';
import DropdownSelect from '../DropdownSelect';
import { Container } from './style';
import { SortOption, SortOrder, SortProperty } from './types';

const SORT_BY: SortOption[] = [
  {
    value: 'default',
    label: 'Default',
  },
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
}: {
  onSortProducts: (
    sortBy: {
      property: SortProperty;
      order: SortOrder;
    } | null
  ) => void;
}) => {
  return (
    <Container>
      <p>Sort by:</p>
      <DropdownSelect
        instanceId={useId()}
        onChange={(
          option: {
            value: typeof SORT_BY[number]['value'];
            label: typeof SORT_BY[number]['label'];
          } | null
        ) => {
          if (!option?.value)
            return onSortProducts({ property: 'title', order: 'asc' });

          if (option.value === 'default') {
            return onSortProducts(null);
          }

          const [property, order] = option.value.split('_') as [
            SortProperty,
            SortOrder
          ];

          return onSortProducts({ property, order });
        }}
        options={SORT_BY}
        defaultValue={SORT_BY[0]}
      />
    </Container>
  );
};
export default CollectionSortBy;
