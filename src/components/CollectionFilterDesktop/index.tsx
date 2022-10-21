import styled from 'styled-components';

const Container = styled.div`
  @media (max-width: 992px) {
    display: none;
  }
`;

const CollectionFilterDesktop = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <Container>{children}</Container>;
};
export default CollectionFilterDesktop;
