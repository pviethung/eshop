import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
const API_KEY = process.env.NEXT_PUBLIC_FIREBASE_API_TOKEN;

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { refreshToken } = req.body;
  console.log(refreshToken);
  if (!refreshToken)
    return res.status(500).json({
      error: true,
    });

  try {
    const rs = await axios({
      method: 'POST',
      url: `https://securetoken.googleapis.com/v1/token?key=${API_KEY}`,
      data: {
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
      },
    });

    const { refresh_token, id_token, ...rest } = rs.data;
    return res.status(200).json({
      refreshToken: refresh_token,
      idToken: id_token,
    });
  } catch (err) {
    return res.status(500).json({
      error: true,
    });
  }
};
export default handler;
