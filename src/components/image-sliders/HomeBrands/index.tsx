import { AppContainer } from '../../GlobalStyle';
import ImageSlider, { ImageProps } from '../ImageSlider';
import { Container } from './style';

const IMAGES: ImageProps[] = [
  {
    src: 'https://cdn.shopify.com/s/files/1/1473/1066/files/brand-4.png?16506261583144270137',
    width: 120,
    height: 120,
  },
  {
    src: 'https://cdn.shopify.com/s/files/1/1473/1066/files/brand-5.png?16506261583144270137',
    width: 120,
    height: 120,
  },
  {
    src: 'https://cdn.shopify.com/s/files/1/1473/1066/files/brand-6.png?16506261583144270137',
    width: 120,
    height: 120,
  },
  {
    src: 'https://cdn.shopify.com/s/files/1/1473/1066/files/brand-7.png?16506261583144270137',
    width: 120,
    height: 120,
  },
  {
    src: 'https://cdn.shopify.com/s/files/1/1473/1066/files/brand-8.png?16506261583144270137',
    width: 120,
    height: 120,
  },
  {
    src: 'https://cdn.shopify.com/s/files/1/1473/1066/files/brand-9.png?16506261583144270137',
    width: 120,
    height: 120,
  },
  {
    src: 'https://cdn.shopify.com/s/files/1/1473/1066/files/brand-0.png?16506261583144270137',
    width: 120,
    height: 120,
  },
];

const HomeBrands = () => {
  return (
    <Container>
      <AppContainer>
        <ImageSlider images={IMAGES} />
      </AppContainer>
    </Container>
  );
};
export default HomeBrands;
