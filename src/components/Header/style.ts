import styled from 'styled-components';
import { boxShadow, transition } from './../GlobalStyle/index';

interface ActionItemProps {
  width?: number;
}

export const StyledHeader = styled.header`
  a {
    text-decoration: none;
    color: initial;
  }
  display: flex;
  position: relative;
  justify-content: center;
`;

export const Popover = styled.div`
  position: absolute;
  width: max-content;
  padding: 20px 40px;
  right: 0;
  visibility: hidden;
  font-size: 2rem;
  opacity: 0;
  transition: ${transition};
  box-shadow: ${boxShadow};
  span {
    color: #000;
    font-weight: 700;
  }
  a {
    color: ${(props) => props.theme.mainColor};
  }
`;

export const ActionItem = styled.li<ActionItemProps>`
  font-size: ${(props) => (props.width ? props.width : 24) + 'px'};
  cursor: pointer;
  position: relative;
  &:hover {
    ${Popover} {
      visibility: visible;
      opacity: 1;
    }
  }
`;

export const Actions = styled.ul`
  position: absolute;
  right: 0;
  top: 50%;
  display: flex;
  list-style: none;
  ${ActionItem} {
    margin-left: 24px;
  }
`;
