import styled from 'styled-components';

export interface DividerProps {
  x: number;
  m?: string;
}

export const StyledDivider = styled.div<DividerProps>`
  width: 100%;
  height: ${(props) => props.x}px;
  margin: ${(props) => props.m};
`;
