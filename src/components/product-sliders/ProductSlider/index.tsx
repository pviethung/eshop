import { useSlider } from '../../../hooks';
import { Product } from '../../../models';
import ProductCard from '../../ProductCard';
import SliderTitle from '../../SliderTitle';
import { Container } from './style';

const ProductSlider = ({
  title,
  products,
}: {
  title: string;
  products: Product[];
}) => {
  const { currentSlide, instanceRef, loaded, ref } = useSlider({
    slides: {
      perView: 4,
      spacing: 30,
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
              key={product.id}
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
