import Image from 'next/image';
import { useRouter } from 'next/router';
import { CART_ACTIONS } from '../../context/cart/types';
import { useCartContext } from '../../hooks';

import { Product } from '../../models';
import { calculateReviews, moneyFormat } from '../../utils';
import ProductReviewStars from '../ProductReviewStars';
import {
  Container,
  ProductActions,
  ProductAddBtn,
  ProductContent,
  ProductDesc,
  ProductImage,
  ProductInner,
  ProductPrice,
  ProductTitle,
} from './style';

export interface ProductProps extends Product {}

const ProductCard = ({
  horizontal,
  product,
}: {
  horizontal?: boolean;
  product: ProductProps;
}) => {
  const router = useRouter();
  const { dispatch } = useCartContext();

  return (
    <Container>
      <ProductInner
        onClick={(e) => {
          router.push(`/products/${product.id}`);
        }}
        horizontal={horizontal || false}
      >
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
            <ProductAddBtn
              onClick={(e) => {
                e.stopPropagation();
                dispatch({
                  type: CART_ACTIONS.ADD_LINE_ITEM,
                  payload: { ...product, quantity: 1 },
                });
              }}
              size="md"
            >
              ADD TO CART
            </ProductAddBtn>
          </ProductActions>
          {horizontal && (
            <>
              <ProductReviewStars
                interactive={false}
                rating={calculateReviews(product.reviews)}
              />
              <ProductDesc>{product.description}</ProductDesc>
            </>
          )}
        </ProductContent>
      </ProductInner>
    </Container>
  );
};
export default ProductCard;
