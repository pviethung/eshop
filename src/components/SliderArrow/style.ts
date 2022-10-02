import styled from 'styled-components';

interface StyledArrowProps {
  disabled: boolean;
  left?: boolean;
  fillColor?: string;
}
export const StyledArrow = styled.svg<StyledArrowProps>`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  cursor: pointer;
  fill: ${(props) => props.fillColor || props.theme.mainColor};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  left: ${(props) => (props.left ? '5px' : 'auto')};
  right: ${(props) => (props.left ? 'auto' : '5px')};
`;
