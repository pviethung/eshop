import { ReactNode, useId } from 'react';
import Collapsible, { CollapsibleProps } from 'react-collapsible';
import { BiMinusCircle, BiPlusCircle } from 'react-icons/bi';
import { Container, StyledCollapsibleTrigger } from './style';
const CollapsibleTrigger = ({ title }: { title: string }) => {
  return (
    <StyledCollapsibleTrigger>
      {title} <BiPlusCircle />
      <BiMinusCircle />
    </StyledCollapsibleTrigger>
  );
};

interface DropdownCollapsibleProps extends CollapsibleProps {
  children: ReactNode;
}

const DropdownCollapsible = ({
  children,
  trigger,
  ...rest
}: DropdownCollapsibleProps) => {
  return (
    <Container>
      <Collapsible
        {...rest}
        contentElementId={useId()}
        triggerElementProps={{ id: useId() }}
        trigger={<CollapsibleTrigger title={trigger as string} />}
      >
        {children}
      </Collapsible>
    </Container>
  );
};
export default DropdownCollapsible;
