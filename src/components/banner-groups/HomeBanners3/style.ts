import { StyledBanner, BannerTitle, BannerDesc } from './../Banner/style';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  ${StyledBanner} {
    width: 25%;
    > span {
      width: 100%;
    }
    &:nth-child(2) {
      ${BannerTitle} {
        font-size: 6rem;
        font-weight: 300;
        color: #fff;
      }
    }
    &:nth-child(4) {
      ${BannerTitle} {
        color: #fff;
      }
    }
  }
  ${BannerTitle} {
    font-size: 3rem;
    font-weight: 500;
    height: auto;
    color: #000;
    white-space: nowrap;
  }
  ${BannerDesc} {
    color: ${(props) => props.theme.mainColor};
  }
`;
