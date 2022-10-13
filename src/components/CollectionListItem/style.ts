import styled from 'styled-components';

export const Container = styled.div``;
export const ListProduct = styled.div<{ horizontal?: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.horizontal ? 'column' : 'row')};
  flex-wrap: wrap;
  margin: 0 -15px;
`;
