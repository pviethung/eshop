import { Form, Formik } from 'formik';
import { useState } from 'react';
import { useTheme } from 'styled-components';
import * as Yup from 'yup';
import { CART_ACTIONS } from '../../context/cart/types';
import { useCartContext, useToast } from '../../hooks';
import { Product } from '../../models';
import { calculateReviews, moneyFormat, sleep } from '../../utils';
import ButtonWithState from '../ButtonWithState';
import TextField from '../forms/TextField';

import PageTitle from '../PageTitle';
import ProductReviewStars from '../ProductReviewStars';
import ProductSelectSizes from '../ProductSelectSizes';

import {
  Container,
  NoReviews,
  ProductAddToCart,
  ProductAvailability,
  ProductDescription,
  ProductPrice,
  ProductTags,
} from './style';

const ProductContent = ({ product }: { product: Product }) => {
  const { mainColor } = useTheme();
  const productReviewStars = calculateReviews(product.reviews);
  const { dispatch } = useCartContext();
  const [currentSize, setCurrentSize] = useState(product.sizes[0]);
  const [loading, setLoading] = useState(false);
  const handleSizeChange = (size: string) => {
    setCurrentSize(size);
  };
  const { showToast } = useToast('success');

  const handleAddCart = async (values: { quantity: string }) => {
    setLoading(true);
    await sleep(1500);
    dispatch({
      type: CART_ACTIONS.ADD_LINE_ITEM,
      payload: {
        ...product,
        variants: {
          [currentSize]: parseInt(values.quantity),
        },
      },
    });
    showToast('Successfully added to cart');
    setLoading(false);
  };
  const quantitySchema = Yup.object({
    quantity: Yup.number()
      .typeError('Quantity must be a number')
      .required()
      .min(1, 'Invalid quantity')
      .max(product.inventory_quantity, 'Not enough quantity'),
  });

  return (
    <Container>
      <ProductAvailability>
        Availability:{' '}
        <span>
          {product.inventory_quantity >= 10
            ? 'Many in stock'
            : product.inventory_quantity === 0
            ? 'out of stock'
            : 'few items are left'}
        </span>
      </ProductAvailability>
      <PageTitle>{product.title}</PageTitle>
      <ProductPrice>{moneyFormat(product.price)}</ProductPrice>
      {productReviewStars > 0 ? (
        <ProductReviewStars interactive={false} rating={productReviewStars} />
      ) : (
        <NoReviews>
          <ProductReviewStars interactive={false} rating={0} />
          <p>No reviews</p>
        </NoReviews>
      )}
      <ProductDescription>{product.description}</ProductDescription>
      {product.tags.length > 0 && (
        // Todos tag clickable
        <ProductTags>
          <p>Tags:</p>
          {product.tags.map((tag, idx) => (
            <div key={idx}>{tag}</div>
          ))}
        </ProductTags>
      )}
      {product.sizes.length > 0 && (
        <ProductSelectSizes onChange={handleSizeChange} sizes={product.sizes} />
      )}
      <ProductAddToCart>
        <Formik
          validateOnBlur={false}
          validateOnChange={false}
          initialValues={{
            quantity: '1',
          }}
          validationSchema={quantitySchema}
          onSubmit={handleAddCart}
        >
          <Form>
            <label>Quantity: </label>

            <TextField name="quantity" id="quantity" />
            <ButtonWithState
              loading={loading}
              innerText="Add to cart"
              type="submit"
              hoverBorder={mainColor}
              size="md"
              fill="true"
            />
          </Form>
        </Formik>
      </ProductAddToCart>
    </Container>
  );
};
export default ProductContent;
