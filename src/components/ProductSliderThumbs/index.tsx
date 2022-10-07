import Image from 'next/image';
import { useEffect, useState } from 'react';
import ReactImageMagnify from 'react-image-magnify';
import { Container, MainImage, Thumbs } from './style';

const ProductSliderThumbs = ({ images }: { images: string[] }) => {
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
              enlargedImageContainerClassName: 'enlargedImageContainer',
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
                src: images[selected],
              },
              largeImage: {
                src: images[selected],
                width: 1200,
                height: 1200,
              },
            }}
          />
        )}
        {!mouted && (
          <Image src={images[selected]} alt="" width={1200} height={1200} />
        )}
      </MainImage>
      <Thumbs>
        {images.map((image, idx) => (
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
