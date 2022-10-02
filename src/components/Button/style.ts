import styled from 'styled-components';
import { transition } from '../GlobalStyle';

export interface ButtonProps {
  fill?: boolean;
  size: 'sm' | 'md' | 'lg';
  hoverBg?: string;
  hoverBorder?: string;
}

export const StyledButton = styled.button<ButtonProps>`
  cursor: pointer;
  font-weight: 500;
  text-transform: uppercase;
  color: #fff;
  border: 2px solid ${(props) => (!props.fill ? '#fff' : props.theme.mainColor)};
  background-color: ${(props) =>
    props.fill ? props.theme.mainColor : 'transparent'};
  font-size: ${(props) =>
    props.size === 'sm' ? '1' : props.size === 'md' ? '2' : '3.5'}rem;
  padding: 0.5em 1.5em;

  &:hover {
    background-color: ${(props) => (props.hoverBg ? props.hoverBg : '#fff')};
    border-color: ${(props) =>
      props.hoverBorder ? props.hoverBorder : '#fff'};
    color: ${(props) => props.theme.mainColor};
    transition: ${transition};
  }
`;
