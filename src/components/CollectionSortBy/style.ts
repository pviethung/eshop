import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  > p {
    margin: 0 10px 0 0;
  }

  @media (max-width: 576px) {
    margin-right: auto;
    > div {
      max-width: 98px;
    }
  }
`;
