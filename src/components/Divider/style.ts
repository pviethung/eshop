import styled from 'styled-components';

export const StyledDivider = styled.div<{ x: number }>`
  width: 100%;
  height: ${(props) => props.x}px;
`;
