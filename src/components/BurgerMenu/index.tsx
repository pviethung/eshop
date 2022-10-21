import { useState } from 'react';
import { slide as Menu, State } from 'react-burger-menu';
import { MdOutlineClear } from 'react-icons/md';
import { useTheme } from 'styled-components';
import NavBar from '../NavBar';

import { Container } from './style';

const BurgerMenu = () => {
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
      <Menu
        isOpen={open}
        onStateChange={(state) => handleStateChange(state)}
        customCrossIcon={<MdOutlineClear fontSize={30} color={mainColor} />}
        itemListElement="div"
      >
        <NavBar
          onItemClicked={() => {
            setOpen(false);
          }}
        />
      </Menu>
    </Container>
  );
};
export default BurgerMenu;
