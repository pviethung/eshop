import { axiosInstance } from './axiosInstance';

export const postUser = async (id: string, token: string) => {
  try {
    await axiosInstance({
      url: `users?documentId=${id}`,
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      data: {
        'fields': {
          'id': {
            'stringValue': id,
          },
          'orders': {
            'arrayValue': {
              'values': [],
            },
          },
        },
      },
    });
  } catch (err) {
    throw err;
  }
};
