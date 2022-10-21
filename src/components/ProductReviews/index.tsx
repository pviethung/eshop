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
import { useAuthContext, useToast } from '../../hooks';
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
  LoadingSpinner,
  NoCommentYet,
} from './style';

const ProductReviews = ({ productId }: { productId: string }) => {
  const { mainColor } = useTheme();
  const [rating, setRating] = useState(0);
  const { user } = useAuthContext();
  const { showToast } = useToast('error');
  let status = '';

  const { data, error, isValidating, mutate } = useSWR(
    `/products/${productId}/reviews`,
    (url: any) => {
      return getComments(productId);
    },
    {
      shouldRetryOnError: false,
    }
  );

  let unparsedReviews: any[] = [];
  let reviews: Review[] = [];

  if (error) status = 'Failed to load comments';
  if (data) {
    unparsedReviews = data.arrayValue?.values
      ? [...data.arrayValue.values]
      : [];

    reviews =
      unparsedReviews.length > 0 ? FireStoreParser(data.arrayValue.values) : [];
  }

  return (
    <Container>
      {isValidating && (
        <LoadingSpinner>
          <div className="loading-spinner">
            <BeatLoader color={mainColor} />
          </div>
        </LoadingSpinner>
      )}
      {reviews.length > 0 && !error && (
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
      {reviews.length === 0 && !error && (
        <NoCommentYet>There are no comments yet</NoCommentYet>
      )}
      {error && <NoCommentYet>{status}</NoCommentYet>}
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
            if (!user) return showToast('Please log in first');
            if (rating === 0)
              return actions.setFieldError('comment', 'Please add your rating');
            if (values.comment.trim() === '')
              return actions.setFieldError('comment', 'Please add your review');
            const newReview = {
              mapValue: {
                fields: {
                  content: values.comment,
                  createdAt: new Date().toISOString(),
                  displayName: user?.displayName,
                  id: getRandomId(),
                  rate: rating,
                  uid: user.userId,
                },
              },
            };

            try {
              const response = await postComment(
                productId,
                unparsedReviews,
                newReview
              );
              mutate();
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
