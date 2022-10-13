import { useAutoAnimate } from '@formkit/auto-animate/react';
import { Product } from '../../models';
import Col from '../grid-layout/Col';
import ProductCard from '../ProductCard';
import { Container, ListProduct } from './style';

const CollectionListItem = ({
  products,
  horizontal,
}: {
  horizontal?: boolean;
  products: Product[];
}) => {
  const [productListRef] = useAutoAnimate<HTMLDivElement>();

  return (
    <Container>
      <ListProduct horizontal={horizontal || false} ref={productListRef}>
        {products.length > 0 &&
          products.map((product) => {
            return (
              <Col key={product.id} w={horizontal ? 1 : 1 / 3}>
                <ProductCard
                  horizontal={horizontal || false}
                  product={product}
                />
              </Col>
            );
          })}
      </ListProduct>
    </Container>
  );
};
export default CollectionListItem;
