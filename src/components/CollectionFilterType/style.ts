import styled, { css } from 'styled-components';
import { transition } from './../GlobalStyle/index';

export const Types = styled.ul`
  list-style: none;
`;

export const TypeItem = styled.li<{ active: boolean }>`
  user-select: none;

  padding: 10px 0;
  text-transform: capitalize;
  font-weight: ${(props) => (props.active ? '500' : '300')};
  color: ${(props) => props.active && props.theme.mainColor};
  transition: ${transition};

  ${(props) =>
    props.active &&
    css`
      position: relative;
      &::after {
        position: absolute;
        content: 'x';
        font-size: 20px;
        color: red;
        right: 5px;
        top: 50%;
        transform: translateY(-50%);
      }
    `}
`;
