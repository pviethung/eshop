import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const API_KEY = process.env.NEXT_PUBLIC_FIREBASE_API_TOKEN;

const register = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password, displayName } = req.body;

  try {
    // signup
    const {
      data: { idToken, refreshToken, localId },
    } = await axios({
      method: 'POST',
      url: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
      data: {
        email: email,
        password: password,
        returnSecureToken: true,
      },
    });

    // update displayname
    await axios({
      method: 'POST',
      url: `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${API_KEY}`,
      data: {
        idToken,
        displayName,
        returnSecureToken: true,
      },
    });

    return res.status(200).json({
      idToken,
      refreshToken,
      email,
      displayName,
      userId: localId,
    });
  } catch (err) {
    return res.status(500).json({
      error: true,
    });
  }
};

export default register;

// update user db
// await axios({
//   method: 'POST',
//   url: `https://firestore.googleapis.com/v1/projects/eshop-657e0/databases/(default)/documents/users?documentId=${data.localId}`,
//   data: {
//     'fields': {
//       'id': {
//         'stringValue': data.localId,
//       },
//       'first_name': {
//         'stringValue': values.firstname,
//       },
//       'last_name': {
//         'stringValue': values.lastname,
//       },
//       'email': {
//         'stringValue': values.email,
//       },
//       // 'test': {
//       //   'arrayValue': {
//       //     'values': [{ 'stringValue': '13' }, { 'stringValue': '456' }],
//       //   },
//       // },
//     },
//   },
// });
