import axios from 'axios';
import useSWRImmutable from 'swr/immutable';

export const useRegister = (
  formBody: {
    email: string;
    password: string;
    displayName: string;
  } | null
) => {
  const swr = useSWRImmutable(formBody ? formBody : null, async (url: any) => {
    const rs = await axios({
      method: 'POST',
      url: '/api/auth/register',
      data: formBody,
    });
    return rs.data;
  });

  return swr;
};
