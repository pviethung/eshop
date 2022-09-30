import { NavList, NavListItem, StyledNavBar } from './style';

const NavBar = () => {
  return (
    <StyledNavBar>
      <NavList>
        <NavListItem>{"Men's"}</NavListItem>
        <NavListItem>{"Women's"}</NavListItem>
        <NavListItem>All Products</NavListItem>
      </NavList>
    </StyledNavBar>
  );
};
export default NavBar;
