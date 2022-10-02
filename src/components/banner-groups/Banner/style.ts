import { transition } from './../../GlobalStyle/index';
import { StyledButton } from './../../Button/style';
import styled from 'styled-components';

export const StyledBanner = styled.div`
  position: relative;
  img {
    transition: ${transition};
  }
  &:hover {
    img {
      scale: 1.1;
    }
  }
`;
export const BannerContent = styled.div`
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  ${StyledButton} {
    margin-top: 25px;
  }
`;

export const BannerTitle = styled.h3`
  font-size: 4.5rem;
  height: 10.3rem;
`;
export const BannerDesc = styled.p`
  font-size: 2.5rem;
  margin-top: 30px;
  height: 5.8rem;
`;
