import styled, { css } from 'styled-components';

export const Vendors = styled.ul`
  list-style: none;
`;

export const VendorItem = styled.li<{ active: boolean }>`
  user-select: none;
  position: relative;
  padding: 10px 0 10px 20px;
  text-transform: capitalize;
  font-weight: ${(props) => (props.active ? '500' : '300')};
  color: ${(props) => props.active && props.theme.mainColor};
  &::before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.mainColor};
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  ${(props) =>
    props.active &&
    css`
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
