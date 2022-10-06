import { KeenSliderInstance, KeenSliderPlugin } from 'keen-slider/react';
import Image from 'next/image';
import { MutableRefObject, useEffect, useState } from 'react';
import ReactImageMagnify from 'react-image-magnify';
import { Container, MainImage, Thumbs } from './style';

function ThumbnailPlugin(
  mainRef: MutableRefObject<KeenSliderInstance | null>
): KeenSliderPlugin {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove('active');
      });
    }
    function addActive(idx: number) {
      slider.slides[idx].classList.add('active');
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener('click', () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on('created', () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on('animationStarted', (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(next);
      });
    });
  };
}

const IMAGES = [
  'https://cdn.shopify.com/s/files/1/1473/1066/products/CONTRAST_FRILLED_DRESS_2048x2048.jpg?v=1473763887',
  'https://cdn.shopify.com/s/files/1/1473/1066/products/CONTRAST_FRILLED_DRESS_1_2048x2048.jpg?v=1473763889',
  'https://cdn.shopify.com/s/files/1/1473/1066/products/CONTRAST_FRILLED_DRESS_2_2048x2048.jpg?v=1473763891',
  'https://cdn.shopify.com/s/files/1/1473/1066/products/CONTRAST_FRILLED_DRESS_3_2048x2048.jpg?v=1473763893',
];

const ProductSliderThumbs = () => {
  const [selected, setSelected] = useState(0);
  const [mouted, setMouted] = useState(false);

  useEffect(() => {
    setMouted(true);
  }, []);

  return (
    <Container>
      <MainImage>
        {mouted && (
          <ReactImageMagnify
            {...{
              enlargedImageContainerStyle: {
                maxWidth: '700px',
              },
              enlargedImageContainerDimensions: {
                width: '100%',
                height: 500,
              },
              smallImage: {
                alt: 'Wristwatch by Ted Baker London',
                isFluidWidth: true,
                src: IMAGES[selected],
              },
              largeImage: {
                src: IMAGES[selected],
                width: 1200,
                height: 1200,
              },
            }}
          />
        )}
        {!mouted && (
          <Image src={IMAGES[selected]} alt="" width={1200} height={1200} />
        )}
      </MainImage>
      <Thumbs>
        {IMAGES.map((image, idx) => (
          <Image
            onClick={() => setSelected(idx)}
            key={idx}
            src={image}
            alt=""
            width={1200}
            height={1200}
          />
        ))}
      </Thumbs>
    </Container>
  );
};
export default ProductSliderThumbs;
