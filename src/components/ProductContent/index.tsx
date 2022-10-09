import { Form, Formik } from 'formik';
import { useTheme } from 'styled-components';
import * as Yup from 'yup';
import { CartLineItem, Product } from '../../models';
import { calculateReviews, moneyFormat } from '../../utils';
import Button from '../Button';
import TextField from '../forms/TextField';

import PageTitle from '../PageTitle';
import ProductReviewStars from '../ProductReviewStars';

import {
  Container,
  ProductAddToCart,
  ProductAvailability,
  ProductDescription,
  ProductPrice,
  ProductTags,
} from './style';

const ProductContent = ({ product }: { product: Product }) => {
  const { mainColor } = useTheme();
  const productReviewStars = calculateReviews(product.reviews);

  const handleAddCart = (values: CartLineItem) => {
    console.log(values);

    //TODOs
    // update cart context
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
      {/* TODO add text no reviews */}
      <ProductReviewStars interactive={false} rating={productReviewStars} />
      <ProductDescription>{product.description}</ProductDescription>
      <ProductTags>
        {product.tags.map((tag, idx) => (
          <div key={idx}>{tag}</div>
        ))}
      </ProductTags>
      <ProductAddToCart>
        <Formik
          validateOnBlur={false}
          validateOnChange={false}
          initialValues={{
            ...product,
            quantity: 1,
            test: 0,
          }}
          validationSchema={quantitySchema}
          onSubmit={handleAddCart}
        >
          <Form>
            <label>Quantity: </label>

            <TextField name="quantity" id="quantity" />
            <Button type="submit" hoverBorder={mainColor} size="md" fill="true">
              Add to cart
            </Button>
          </Form>
        </Formik>
      </ProductAddToCart>
    </Container>
  );
};
export default ProductContent;
