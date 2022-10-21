import styled from 'styled-components';
import { StyledBanner } from '../Banner/style';

export const Container = styled.div`
  ${StyledBanner} {
    width: 33.333%;
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
      width: 60% !important;
    }
  }
`;

export const MobileScrollTrack = styled.div`
  display: flex;

  @media (max-width: 1200px) {
    width: 120% !important;
  }
  @media (max-width: 992px) {
    width: 180% !important;
  }
`;
