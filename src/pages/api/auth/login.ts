import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { getUser, postUser } from '../../../services/firebase';

const API_KEY = process.env.NEXT_PUBLIC_FIREBASE_API_TOKEN;

const loginHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password } = req.body;

  try {
    const rs: any = await axios({
      method: 'POST',
      url: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
      data: {
        email,
        password,
        returnSecureToken: true,
      },
    });

    const { expiresIn, kind, localId, registered, ...rest } = rs.data;

    let user: any = null;

    try {
      user = await getUser(localId, rest.idToken);
    } catch (err) {}

    if (!user) {
      // update user to db
      await postUser(localId, rest.idToken);
    }

    return res.status(200).json({
      ...rest,
      userId: localId,
    });
  } catch (err: any) {
    return res.status(500).json({
      error: err,
    });
  }
};

export default loginHandler;
