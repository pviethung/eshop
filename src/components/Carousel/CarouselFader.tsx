import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import { useState } from 'react';
import { ImageData } from '.';
import useSlider from '../../hooks/useSlider';
import {
  CarouselDot,
  CarouselDots,
  CarouselFaderSlide,
  CarouselItem,
  StyledCarouselFader,
} from './style';

interface CarouselFaderProps {
  images: ImageData[];
  onSlideChange: (currentImg: null | ImageData) => void;
}

const CarouselFader = ({ images, onSlideChange }: CarouselFaderProps) => {
  const [opacities, setOpacities] = useState<number[]>([]);
  const { currentSlide, instanceRef, loaded, ref } = useSlider({
    slides: images.length,
    loop: true,
    detailsChanged(s) {
      const new_opacities = s.track.details.slides.map(
        (slide) => slide.portion
      );
      setOpacities(new_opacities);
    },
    slideChanged(s) {
      onSlideChange(null);
      setTimeout(() => onSlideChange(images[s.track.details.rel]), 500);
    },
  });

  return (
    <>
      <StyledCarouselFader ref={ref}>
        {images.map((img, idx) => (
          <CarouselFaderSlide
            key={idx}
            style={{ opacity: opacities[idx], transitionDuration: '2000' }}
          >
            <CarouselItem>
              <Image
                src={img.src}
                alt=""
                layout="responsive"
                width={2045}
                height={855}
              />
            </CarouselItem>
          </CarouselFaderSlide>
        ))}
      </StyledCarouselFader>
      {loaded && instanceRef.current && (
        <CarouselDots>
          {[
            ...Array.from(
              { length: instanceRef.current.track.details.slides.length },
              (_, i) => i
            ),
          ].map((idx) => {
            return (
              <CarouselDot
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={currentSlide === idx ? ' active' : ''}
              ></CarouselDot>
            );
          })}
        </CarouselDots>
      )}
    </>
  );
};
export default CarouselFader;
