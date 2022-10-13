import { Product } from './../../models/Product';
import { getAllProducts } from './getAllProducts';
import { getCollection } from './getCollection';
//@ts-ignore
import FireStoreParser from 'firestore-parser';
import { Collection } from '../../models';

const COLLECTIONS = {
  featuredCollection: 'PyDd6R3DdwspSxcdsArb',
  newCollection: 'CutqiUjEcxplU0wCJD4D',
} as const;

const COLLECTION_IDS = Object.values(COLLECTIONS);
const COLLECTION_NAMES = Object.keys(COLLECTIONS);

type CollectionNames = keyof typeof COLLECTIONS;
type ReturnType = {
  [key in CollectionNames]: Collection | null;
};

export const getHomeCollections = async (): Promise<ReturnType> => {
  let allProducts: Product[] = [];
  let result = {} as ReturnType;

  const requests = await Promise.allSettled([
    getAllProducts(),
    ...COLLECTION_IDS.map((id) => {
      return getCollection(id);
    }),
  ]);

  requests.forEach((response, idx) => {
    const key = COLLECTION_NAMES[idx - 1] as keyof typeof COLLECTIONS;

    if (idx === 0 && response.status === 'fulfilled') {
      allProducts = response.value;
      return;
    }
    if (response.status === 'fulfilled') {
      const productIds = FireStoreParser(response.value.products);
      const id = FireStoreParser(response.value.id);
      const title = FireStoreParser(response.value.title);
      const products = allProducts.filter((p) => {
        return productIds.includes(p.id);
      });

      result[key] = {
        id,
        title,
        products,
      };
      return;
    }

    result[key] = null;
  });

  return result;
};
