import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
`;

const Row = ({ children }: { children: React.ReactNode }) => {
  return <Container>{children}</Container>;
};
export default Row;
