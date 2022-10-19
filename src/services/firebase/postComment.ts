//@ts-ignore
import FireStoreParser from 'firestore-parser';
import { axiosInstance } from './axiosInstance';

// The firestore API does not support updating an existing array... ????
// https://stackoverflow.com/questions/53026897/cloud-firestore-add-remove-items-in-arrayvalue-field-via-rest-apis-patch-metho

const parseData = (test: any) => {
  const rs: any = {};
  for (const [key, value] of Object.entries(test)) {
    const valueKey = key === 'rate' ? 'integerValue' : 'stringValue';
    rs[key] = {
      [valueKey]: value,
    };
  }
  return rs;
};

export const postComment = async (
  id: string,
  prevReviews: any[],
  newReview: any
) => {
  prevReviews = prevReviews.map((review) => {
    return {
      'mapValue': {
        'fields': parseData(review),
      },
    };
  });

  newReview = {
    'mapValue': {
      'fields': parseData(newReview.mapValue.fields),
    },
  };

  try {
    const rs = await axiosInstance({
      url: `products/${id}?updateMask.fieldPaths=reviews`,
      method: 'PATCH',
      data: {
        'fields': {
          'reviews': {
            'arrayValue': {
              'values': [...prevReviews, newReview],
            },
          },
        },
      },
    });

    return FireStoreParser(rs.data.fields);
  } catch (err) {
    throw err;
  }
};
