import Image from 'next/image';
import { useSlider } from '../../../hooks';
import Arrow from '../../SliderArrow';
import { Container } from './style';

export interface ImageProps {
  src: string;
  width: number;
  height: number;
}

const ImageSlider = ({ images }: { images: ImageProps[] }) => {
  const { currentSlide, instanceRef, loaded, ref } = useSlider({
    slides: {
      perView: 6,
      spacing: 0,
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
