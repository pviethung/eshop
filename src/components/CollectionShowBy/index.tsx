import { useId } from 'react';
import { ActionMeta } from 'react-select';
import DropdownSelect from '../DropdownSelect';
import { Container } from './style';

const SHOW_BY = [
  {
    value: 9,
    label: '9',
  },
  {
    value: 15,
    label: '15',
  },
  {
    value: 30,
    label: '30',
  },
  {
    value: 'all',
    label: 'All',
  },
];

export type NumberOfProductsValues = '9' | '15' | '30' | 'all';

const CollectionShowBy = ({
  onSelectNumberOfProducts,
}: {
  onSelectNumberOfProducts: (showBy: NumberOfProductsValues) => void;
}) => {
  return (
    <Container>
      <DropdownSelect
        onChange={(
          option: typeof SHOW_BY[0] | null,
          actionMeta: ActionMeta<typeof SHOW_BY[0]>
        ) => {
          console.log(option?.value);
        }}
        instanceId={useId()}
        defaultValue={SHOW_BY[0]}
        options={SHOW_BY}
      />
    </Container>
  );
};
export default CollectionShowBy;
