import { useAutoAnimate } from '@formkit/auto-animate/react';
import { Product } from '../../models';
import Col from '../grid-layout/Col';
import ProductCard from '../ProductCard';
import { Container, ListProduct } from './style';

const CollectionListItem = ({ products }: { products: Product[] }) => {
  const [productListRef] = useAutoAnimate<HTMLDivElement>();

  return (
    <Container>
      <ListProduct ref={productListRef}>
        {products.length > 0 &&
          products.map((product) => {
            return (
              <Col key={product.id} w={1 / 3}>
                <ProductCard product={product} />
              </Col>
            );
          })}
      </ListProduct>
    </Container>
  );
};
export default CollectionListItem;
