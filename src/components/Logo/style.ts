import styled from 'styled-components';

export const StyledLogo = styled.div`
  h1 {
    font-size: 6rem;
    display: flex;
    align-items: center;
    > svg {
      fill: ${(props) => props.theme.mainColor};
      margin-right: 5px;
      font-size: 8rem;
    }
    > div {
      span:first-child {
        font-weight: 700;
        color: ${(props) => props.theme.mainColor};
      }
      span:last-child {
        font-weight: 400;
      }
      > span:last-child {
        display: block;
        font-size: 1.2rem;
        letter-spacing: 1px;
        text-transform: uppercase;
        font-weight: 300;
        color: ${(props) => props.theme.grayColor};
      }
    }
  }

  @media (max-width: 992px) {
    h1 {
      font-size: 5rem;
      > svg {
        display: none;
      }
      > div {
        span:last-child {
          font-size: 0.8rem;
        }
      }
    }
  }
`;
