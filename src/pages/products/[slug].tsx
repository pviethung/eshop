import Col from '../../components/grid-layout/Col';
import Row from '../../components/grid-layout/Row';
import ProductImageZoom from '../../components/ProductImageZoom';

const Product = () => {
  return (
    <Row>
      <Col w={1 / 2}>
        <ProductImageZoom />
      </Col>
    </Row>
  );
};
export default Product;
