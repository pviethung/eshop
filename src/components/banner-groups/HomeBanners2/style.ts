import { BannerContent, BannerTitle } from './../Banner/style';
import styled from 'styled-components';

export const Container = styled.div`
  ${BannerContent} {
    color: #000;
  }
  ${BannerTitle} {
    font-size: 5.6rem;
    height: auto;
  }
`;
