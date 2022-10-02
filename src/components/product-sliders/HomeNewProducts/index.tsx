import { AppContainer } from '../../GlobalStyle';
import ProductSlider from '../ProductSlider';

const PRODUCTS = [
  {
    imgSrc:
      'https://cdn.shopify.com/s/files/1/1473/1066/products/BASIC_POPLIN_SHIRT_1_large.jpg?v=1473778036',
    price: '250.000',
    title: 'ADIDAS TRAINERS',
  },
  {
    imgSrc:
      'https://cdn.shopify.com/s/files/1/1473/1066/products/LIMITED_EDITION_BOMBER_JACKET_large.jpg?v=1473774944',
    price: '200.000',
    title: 'Floral Print Jeans',
  },
  {
    imgSrc:
      'https://cdn.shopify.com/s/files/1/1473/1066/products/DOUBLE_SIDED_BERMUDA_SHORTS_large.jpg?v=1473774996',
    price: '200.000',
    title: 'Flue Denim Large',
  },
  {
    imgSrc:
      'https://cdn.shopify.com/s/files/1/1473/1066/products/METALLIC_BOMBER_JACKET_large.jpg?v=1473764217',
    price: '300.000',
    title: 'Golden Brown',
  },
  {
    imgSrc:
      'https://cdn.shopify.com/s/files/1/1473/1066/products/ORIENTAL_PRINT_BODYSUIT_large.jpg?v=1473775196',
    price: '300.000',
    title: 'Herschel Novel Holdall',
  },
];

const HomeNew = () => {
  return (
    <AppContainer>
      <ProductSlider title="New" products={PRODUCTS} />
    </AppContainer>
  );
};
export default HomeNew;
