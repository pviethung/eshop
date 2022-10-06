import styled from 'styled-components';

const Container = styled.h2`
  font-size: 3rem;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 60px;
`;

const PageTitle = ({ children }: { children: React.ReactNode }) => {
  return <Container>{children}</Container>;
};
export default PageTitle;
