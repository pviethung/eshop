import Divider from '../../components/Divider';
import { AppContainer } from '../../components/GlobalStyle';
import Col from '../../components/grid-layout/Col';
import Row from '../../components/grid-layout/Row';
import ProductContent from '../../components/ProductContent';
import ProductSliderThumbs from '../../components/ProductSliderThumbs';

const product = {
  id: 1,
  inventory_quantity: 10,
  title: 'denim field jacket',
  price: 55000,
  compare_at_price: 0,
  vendor: 'brand A',
  type: 'dress',
  description:
    'Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.',
  sizes: ['s', 'm', 'l', 'xl'],
  images: [
    'https://cdn.shopify.com/s/files/1/1473/1066/products/CONTRAST_FRILLED_DRESS_2048x2048.jpg?v=1473763887',
    'https://cdn.shopify.com/s/files/1/1473/1066/products/CONTRAST_FRILLED_DRESS_1_2048x2048.jpg?v=1473763889',
    'https://cdn.shopify.com/s/files/1/1473/1066/products/CONTRAST_FRILLED_DRESS_2_2048x2048.jpg?v=1473763891',
    'https://cdn.shopify.com/s/files/1/1473/1066/products/CONTRAST_FRILLED_DRESS_3_2048x2048.jpg?v=1473763893',
  ],
  tags: ['vintage', 'women', 'club dresses'],
  reviews: [],
};

const Product = () => {
  return (
    <AppContainer>
      <Divider x={60} />
      <Row>
        <Col w={1 / 2}>
          <ProductSliderThumbs />
        </Col>
        <Col w={1 / 2}>
          <ProductContent />
        </Col>
      </Row>
    </AppContainer>
  );
};
export default Product;
