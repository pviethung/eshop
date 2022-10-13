import styled, { css } from 'styled-components';

export const Colors = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

export const ColorItem = styled.a<{ bgColor: string; active: boolean }>`
  background-color: ${(props) => props.bgColor};
  cursor: pointer;
  padding: 10px;
  min-width: 40px;
  height: 40px;
  ${(props) =>
    props.active &&
    css`
      border: 2px solid red;
      position: relative;

      &::after {
        content: 'x';
        position: absolute;
        right: -10px;
        top: -20px;
        font-size: 30px;
        color: red;
      }
    `}
`;
