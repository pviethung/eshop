import { animated } from '@react-spring/web';
import styled from 'styled-components';
import { StyledButton } from './../Button/style';

export const StyledCarousel = styled.div`
  position: relative;
  overflow: hidden;
`;
export const StyledCarouselFader = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: 41.809291%;
`;
export const CarouselFaderSlide = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
`;

export const CarouselItem = styled.div`
  position: relative;
`;

export const CarouselCaptionWrap = styled(animated.div)`
  user-select: none;
  position: absolute;
  top: 25%;
  right: 10%;
  max-width: 45rem;
  ${StyledButton} {
    margin-top: 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
export const CarouselCaptionTitle = styled.h4`
  font-size: 3rem;
  font-weight: 400;
  text-transform: capitalize;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;
export const CarouselCaptionContent = styled.h3`
  font-size: 8rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.mainColor};

  @media (max-width: 992px) {
    font-size: 4rem;
    width: 200px;
  }
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;
export const CarouselDots = styled.div`
  display: flex;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 768px) {
    display: none;
  }
`;
export const CarouselDot = styled.button`
  margin: 0 2.5px;
  border-radius: 50%;
  border: 0;
  background-color: #c5c5c5;
  width: 15px;
  height: 15px;
  outline: none;
  &.active {
    background-color: ${(props) => props.theme.mainColor};
  }
`;
