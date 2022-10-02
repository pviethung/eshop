import { useKeenSlider } from 'keen-slider/react';
import ProductCard, { ProductProps } from '../../ProductCard';
import { Container } from './style';
import 'keen-slider/keen-slider.min.css';
import SliderTitle from '../../SliderTitle';

const ProductSlider = ({
  title,
  products,
}: {
  title?: string;
  products: ProductProps[];
}) => {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 4,
      spacing: 0,
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
