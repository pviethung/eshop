import Select, { GroupBase, Props } from 'react-select';
import { Container } from './style';

const DropdownSelect = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: Props<Option, IsMulti, Group>
) => {
  return (
    <Container className={`${props.className}`}>
      <Select
        className={`dropdown-select-container ${props.className}`}
        classNamePrefix="dropdown-select"
        {...props}
      />
    </Container>
  );
};
export default DropdownSelect;
