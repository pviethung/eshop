import styled from 'styled-components';

const Container = styled.h3`
  color: ${(props) => props.theme.mainColor};
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 15px;
  text-transform: uppercase;
`;

const FormTitle = ({ children }: { children: React.ReactNode }) => {
  return <Container>{children}</Container>;
};
export default FormTitle;
