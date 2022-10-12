import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useState } from 'react';
import { useTheme } from 'styled-components';
import * as Yup from 'yup';
import { Review } from '../../models/Review';

import ProductReviewStars from '../ProductReviewStars';
//@ts-ignore
import FireStoreParser from 'firestore-parser';
import { BeatLoader } from 'react-spinners';
import useSWR from 'swr';
import { getComments, postComment } from '../../services/firebase';
import { getRandomId } from '../../utils';
import ButtonWithState from '../ButtonWithState';
import {
  CommentForm,
  CommentItem,
  CommentList,
  CommentRating,
  CommentTextArea,
  Container,
} from './style';

const ProductReviews = ({ productId }: { productId: string }) => {
  const { mainColor } = useTheme();
  const [rating, setRating] = useState(0);

  const { data, error, isValidating, mutate } = useSWR(
    `/products/${productId}/reviews`,
    (url: any) => {
      console.log(url);
      return getComments(productId);
    }
  );

  if (error) return <div>failed to load</div>;

  //TODO loading state
  if (!data)
    return (
      <div className="loading-spinner">
        <BeatLoader color={mainColor} />
      </div>
    );

  console.log(data);

  const unparsedReviews = data.arrayValue?.values
    ? [...data.arrayValue.values]
    : [];
  const reviews: Review[] =
    unparsedReviews.length > 0 ? FireStoreParser(data.arrayValue.values) : [];

  return (
    <Container>
      {reviews.length > 0 && (
        <CommentList>
          {reviews.map((review) => (
            <CommentItem key={review.id}>
              <div>
                <h4>{review.displayName}</h4>
                <p>{review.content}</p>
              </div>
              <CommentRating>
                <ProductReviewStars
                  interactive={false}
                  key={review.id}
                  rating={review.rate}
                />
                <p>
                  {formatDistanceToNow(new Date(review.createdAt), {
                    addSuffix: true,
                  })}
                </p>
              </CommentRating>
            </CommentItem>
          ))}
        </CommentList>
      )}
      {reviews.length === 0 && <p>There are no comments yet</p>}
      <CommentForm>
        <Formik
          validateOnBlur={false}
          validateOnChange={false}
          initialValues={{
            comment: '',
          }}
          validationSchema={Yup.object({
            comment: Yup.string().required('Please add your comment'),
          })}
          onSubmit={async (values, actions) => {
            if (rating === 0)
              return actions.setFieldError(
                'comment',
                'Please give this product a rating.'
              );
            const newReview = {
              mapValue: {
                fields: {
                  content: values.comment,
                  createdAt: new Date().toISOString(),
                  displayName: 'Hung', //TODO add user.displayName
                  id: getRandomId(),
                  rate: rating,
                  uid: 'W6NCAbf0mYOZnTMntlTfMxdPtnu2', // TODO add user.id
                },
              },
            };

            try {
              const response = await postComment(
                productId,
                unparsedReviews,
                newReview
              );
              // console.log('[response after submit] ', response.reviews);
              mutate();
              // mutate(response.reviews);
              actions.resetForm();
            } catch (err) {
              actions.setFieldError('comment', 'Something went wrong');
            }

            setRating(0);
          }}
        >
          {(props) => (
            <Form>
              <div>
                <p>Your rating: </p>
                <ProductReviewStars
                  onRate={(e) => {
                    setRating(e.rating);
                  }}
                  interactive={true}
                  rating={rating}
                />
              </div>
              <div>
                <CommentTextArea>
                  <Field
                    rows="5"
                    cols="40"
                    as="textarea"
                    id="comment"
                    name="comment"
                  />
                  <p>
                    <ErrorMessage name="comment" />
                  </p>
                </CommentTextArea>

                <ButtonWithState
                  innerText={'Send'}
                  loading={props.isSubmitting}
                  size="md"
                  type="submit"
                  fill="true"
                  hoverBorder={mainColor}
                />
              </div>
            </Form>
          )}
        </Formik>
      </CommentForm>
    </Container>
  );
};
export default ProductReviews;
