//@ts-ignore
import { axiosInstance } from './axiosInstance';

export const getCollectionIds = async () => {
  try {
    const rs = await axiosInstance({
      url: `collections?mask.fieldPaths=id&pageSize=50`,
      method: 'GET',
    });

    return rs.data.documents.map((document: any) => {
      return document.fields.id;
    });
  } catch (err) {
    throw err;
  }
};
