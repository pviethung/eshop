import styled from 'styled-components';
import { BannerDesc, BannerTitle, StyledBanner } from './../Banner/style';

export const Container = styled.div`
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

  @media (max-width: 1200px) {
    overflow-x: scroll;
    overflow-y: hidden;

    ${StyledBanner} {
      width: 40% !important;
      > span {
        display: block !important;
        width: 100% !important;
        max-width: unset !important;
      }
    }
  }

  @media (max-width: 992px) {
    ${StyledBanner} {
      width: 50% !important;
    }
  }
`;

export const MobileScrollTrack = styled.div`
  display: flex;

  @media (max-width: 1200px) {
    width: 120% !important;
  }
  @media (max-width: 993px) {
    width: 160% !important;
  }
`;
