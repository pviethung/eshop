import styled from 'styled-components';
import { BannerContent, BannerTitle } from './../Banner/style';

export const Container = styled.div`
  ${BannerContent} {
    color: #000;
  }
  ${BannerTitle} {
    font-size: 5.6rem;
    height: auto;
  }

  @media (max-width: 992px) {
    ${BannerContent} {
      top: 35px;
    }
  }
`;
