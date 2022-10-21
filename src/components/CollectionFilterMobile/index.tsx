import { useState } from 'react';
import { slide as Menu, State } from 'react-burger-menu';
import { BiFilterAlt } from 'react-icons/bi';
import { MdOutlineClear } from 'react-icons/md';
import { useTheme } from 'styled-components';
import { Container, MenuWrap, Trigger } from './style';

const CollectionFilterMobile = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { mainColor } = useTheme();
  const [open, setOpen] = useState(false);

  const handleStateChange = (state: State) => {
    setOpen(state.isOpen);
  };
  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <Container>
      <Trigger onClick={(e) => setOpen(!open)}>
        <BiFilterAlt fontSize={20} />
      </Trigger>
      <MenuWrap>
        <Menu
          customBurgerIcon={false}
          customCrossIcon={<MdOutlineClear fontSize={30} color={mainColor} />}
          isOpen={open}
          onStateChange={(state) => handleStateChange(state)}
          itemListElement="div"
        >
          {children}
        </Menu>
      </MenuWrap>
    </Container>
  );
};
export default CollectionFilterMobile;
