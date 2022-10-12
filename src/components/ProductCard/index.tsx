import Image from 'next/image';
import { Product } from '../../models';
import { moneyFormat } from '../../utils';
import {
  Container,
  ProductActions,
  ProductAddBtn,
  ProductContent,
  ProductImage,
  ProductInner,
  ProductPrice,
  ProductTitle,
} from './style';

export interface ProductProps extends Product {}

const ProductCard = ({ product }: { product: ProductProps }) => {
  return (
    <Container>
      <ProductInner>
        <ProductImage>
          <Image
            src={product.images[0]}
            alt={product.title}
            width={385}
            height={480}
          />
        </ProductImage>
        <ProductContent>
          <ProductTitle>{product.title}</ProductTitle>
          <ProductPrice>{moneyFormat(product.price)}</ProductPrice>
          <ProductActions>
            <ProductAddBtn size="md">ADD TO CART</ProductAddBtn>
          </ProductActions>
        </ProductContent>
      </ProductInner>
    </Container>
  );
};
export default ProductCard;
