import styled from 'styled-components';

export const Container = styled.div`
  @media (max-width: 576px) {
    > div:first-child {
    }
  }
`;
export const ActionHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  > p {
    margin: 0 0 0 auto;
  }

  @media (max-width: 576px) {
    margin-bottom: 20px;
    > p {
      margin: 0;
    }
  }
`;
export const CollectionSidebar = styled.div`
  position: sticky;
  top: 0;
`;
