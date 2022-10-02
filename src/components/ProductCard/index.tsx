import Image from 'next/image';
import Button from '../Button';
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

export interface ProductProps {
  imgSrc: string;
  price: string;
  title: string;
}

const ProductCard = ({ product }: { product: ProductProps }) => {
  return (
    <Container>
      <ProductInner>
        <ProductImage>
          <Image
            src={product.imgSrc}
            alt={product.title}
            width={385}
            height={480}
          />
        </ProductImage>
        <ProductContent>
          <ProductTitle>{product.title}</ProductTitle>
          <ProductPrice>{product.price} VND</ProductPrice>
          <ProductActions>
            <ProductAddBtn size="md">ADD TO CART</ProductAddBtn>
          </ProductActions>
        </ProductContent>
      </ProductInner>
    </Container>
  );
};
export default ProductCard;
