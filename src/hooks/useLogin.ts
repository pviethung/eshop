import axios from 'axios';
import useSWRImmutable from 'swr/immutable';

export const useLogin = (
  formBody: {
    email: string;
    password: string;
  } | null
) => {
  return useSWRImmutable(
    formBody,
    async (url: any) => {
      const rs = await axios({
        method: 'POST',
        url: `/api/auth/login`,
        data: formBody,
      });
      return rs.data;
    },
    {
      shouldRetryOnError: false,
    }
  );
};
