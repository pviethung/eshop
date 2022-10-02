import { useKeenSlider } from 'keen-slider/react';
import ProductCard, { ProductProps } from '../../ProductCard';
import { Container } from './style';
import SliderTitle from '../../SliderTitle';
import useSlider from '../../../hooks/useSlider';

const ProductSlider = ({
  title,
  products,
}: {
  title?: string;
  products: ProductProps[];
}) => {
  const { currentSlide, instanceRef, loaded, ref } = useSlider({
    slides: {
      perView: 4,
      spacing: 0,
    },
    slideChanged(s) {
      console.log('images changed');
    },
  });

  return (
    <>
      <Container>
        <SliderTitle>{title}</SliderTitle>
        <div
          ref={ref}
          className="keen-slider"
          style={{ paddingBottom: '70px', marginBottom: '-70px', zIndex: '1' }}
        >
          {products.map((product) => (
            <div
              key={product.imgSrc}
              className="keen-slider__slide"
              style={{ overflow: 'unset' }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};
export default ProductSlider;
