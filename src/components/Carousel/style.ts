import { StyledButton } from './../Button/style';
import { animated } from '@react-spring/web';
import styled from 'styled-components';

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
`;
export const CarouselCaptionTitle = styled.h4`
  font-size: 3rem;
  font-weight: 400;
  text-transform: capitalize;
  margin-bottom: 20px;
`;
export const CarouselCaptionContent = styled.h3`
  font-size: 8rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.mainColor};
`;
export const CarouselDots = styled.div`
  display: flex;
  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
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
