import { axiosInstance, PAGE_SIZE } from './axiosInstance';
//@ts-ignore
import FireStoreParser from 'firestore-parser';

export const getCollectionTitles = async () => {
  try {
    const rs = await axiosInstance({
      url: `collections?mask.fieldPaths=id&mask.fieldPaths=title&pageSize=${PAGE_SIZE}`,
      method: 'GET',
    });

    return rs.data.documents.map((document: any) => {
      return {
        title: FireStoreParser(document.fields.title),
        id: FireStoreParser(document.fields.id),
      };
    });
  } catch (err) {
    throw err;
  }
};
