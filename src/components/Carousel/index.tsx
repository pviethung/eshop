import {
  CarouselCaptionContent,
  CarouselCaptionTitle,
  CarouselCaptionWrap,
  StyledCarousel,
} from './style';

import Button from '../Button';
import { useTheme } from 'styled-components';
import { useTransition } from '@react-spring/web';
import React, { useState } from 'react';
import CarouselFader from './CarouselFader';

const IMAGES = [
  {
    src: 'https://cdn.shopify.com/s/files/1/1473/1066/files/slider16.jpg?7588841157370907452',
    title: 'summer sale',
    content: 'save up to 70%',
  },
  {
    src: 'https://cdn.shopify.com/s/files/1/1473/1066/files/slider17.jpg?7588841157370907452',
    title: 'new season',
    content: 'lookbook collection',
  },
];

export type ImageData = typeof IMAGES[0];

const Carousel = () => {
  const { mainColor } = useTheme();
  const [carouselContent, setCarouselContent] = useState<any>(IMAGES[0]);

  const transitions = useTransition(carouselContent, {
    config: {
      duration: 300,
    },
    from: { opacity: 0, x: -100, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    leave: { opacity: 0, y: 100, x: 0 },
  });

  const onSlideChange = (data: ImageData | null) => {
    setCarouselContent(data);
  };

  return (
    <StyledCarousel>
      <CarouselFader images={IMAGES} onSlideChange={onSlideChange} />
      {transitions((style, item) =>
        item ? (
          <CarouselCaptionWrap style={style}>
            <CarouselCaptionTitle>{item.title}</CarouselCaptionTitle>
            <CarouselCaptionContent>{item.content}</CarouselCaptionContent>
            <Button size="lg" hoverBorder={mainColor} fill="true">
              Shop now
            </Button>
          </CarouselCaptionWrap>
        ) : (
          ''
        )
      )}
    </StyledCarousel>
  );
};
export default Carousel;
