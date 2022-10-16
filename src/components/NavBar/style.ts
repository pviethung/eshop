import styled from 'styled-components';
import { transition } from './../GlobalStyle';

export const StyledNavBar = styled.nav`
  margin-top: 25px;
`;
export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
`;
export const NavListItem = styled.li`
  font-size: 1.8rem;
  font-weight: 500;
  padding: 0 16px;
  text-transform: uppercase;
  cursor: pointer;
  transition: ${transition};
  &:hover {
    color: ${(props) => props.theme.mainColor};
  }
`;
