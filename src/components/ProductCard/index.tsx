import Image from 'next/image';
import { useRouter } from 'next/router';
import { CART_ACTIONS } from '../../context/cart/types';
import { useAuthContext, useCartContext, useToast } from '../../hooks';

import { useState } from 'react';
import { useTheme } from 'styled-components';
import { Product } from '../../models';
import { calculateReviews, moneyFormat, sleep } from '../../utils';
import ButtonWithState from '../ButtonWithState';
import ProductReviewStars from '../ProductReviewStars';
import ProductSelectSizes from '../ProductSelectSizes';
import {
  Container,
  ProductActions,
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
  const { user } = useAuthContext();
  const { mainColor } = useTheme();
  const [loading, setLoading] = useState(false);
  const [currentSize, setCurentSize] = useState(product.sizes[0]);
  const { showToast } = useToast('success');

  const handleSizeChange = (size: string) => {
    setCurentSize(size);
  };
  return (
    <Container>
      <ProductInner
        onClick={(e) => {
          router.push(`/products/${product.id}`);
        }}
        horizontal={horizontal || false}
      >
        <ProductImage horizontal={horizontal || false}>
          <Image
            src={product.images[0]}
            alt={product.title}
            width={385}
            height={480}
            layout="responsive"
          />
        </ProductImage>
        <ProductContent>
          <ProductTitle>{product.title}</ProductTitle>
          <ProductPrice>{moneyFormat(product.price)}</ProductPrice>

          <ProductActions>
            <ProductSelectSizes
              onChange={handleSizeChange}
              sizes={product.sizes}
            />
            <ButtonWithState
              fill="true"
              hoverBorder={mainColor}
              innerText="ADD TO CART"
              type="button"
              loading={loading}
              onClick={async (e) => {
                e.stopPropagation();
                if (!user) return router.push('/login');
                setLoading(true);
                dispatch({
                  type: CART_ACTIONS.ADD_LINE_ITEM,
                  payload: {
                    ...product,
                    variants: {
                      [currentSize]: 1,
                    },
                  },
                });
                await sleep(1500);
                setLoading(false);
                showToast('Successfully added to cart');
              }}
              size="md"
            />
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
