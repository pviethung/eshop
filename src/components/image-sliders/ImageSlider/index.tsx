import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';
import { useState } from 'react';
import { Container } from './style';
import Arrow from '../../SliderArrow';

export interface ImageProps {
  src: string;
  width: number;
  height: number;
}

const ImageSlider = ({ images }: { images: ImageProps[] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 6,
      spacing: 0,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <Container>
      <div ref={ref} className="keen-slider">
        {images.map((image) => (
          <div key={image.src} className="keen-slider__slide">
            <Image
              src={image.src}
              width={image.width}
              height={image.height}
              alt=""
            />
          </div>
        ))}
      </div>
      {loaded && instanceRef.current && (
        <>
          <Arrow
            fillColor="#000"
            left
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.prev()
            }
            disabled={currentSlide === 0}
          />

          <Arrow
            fillColor="#000"
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.next()
            }
            disabled={
              currentSlide ===
              instanceRef.current.track.details.slides.length - 1
            }
          />
        </>
      )}
    </Container>
  );
};
export default ImageSlider;
