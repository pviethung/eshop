import { getCollectionIds } from '../../services/firebase/getCollectionIds';

import { GetStaticPaths, GetStaticProps } from 'next';
import Divider from '../../components/Divider';
import { AppContainer } from '../../components/GlobalStyle';
//@ts-ignore
import FireStoreParser from 'firestore-parser';
import { ParsedUrlQuery } from 'querystring';
import CollectionFilter from '../../components/CollectionFilter';
import { Collection } from '../../models';
import { getCollection } from '../../services/firebase/getCollection';
import { getProducts } from '../../services/firebase/getProducts';

interface PageProps extends Collection {}
interface PageParams extends ParsedUrlQuery {
  collectionId: string;
}

export const getStaticPaths: GetStaticPaths<PageParams> = async () => {
  // get
  try {
    const rs = await getCollectionIds();
    const ids = FireStoreParser(rs);

    return {
      paths: ids.map((id: string) => ({
        params: { collectionId: id },
      })),
      fallback: false,
    };
  } catch (err) {
    throw err;
  }
};

export const getStaticProps: GetStaticProps<PageProps, PageParams> = async ({
  params,
}) => {
  const collectionId = params?.collectionId;
  if (!collectionId)
    return {
      notFound: true,
    };

  try {
    const collection = await getCollection(collectionId);
    const { id, title, products: productIds } = FireStoreParser(collection);
    const products = await getProducts(productIds);

    return {
      props: {
        id,
        title,
        products,
      },
    };
  } catch (err) {
    throw err;
  }
};

const CollectionPage = ({ title, products, id }: PageProps) => {
  return (
    <>
      <Divider x={80} />
      <AppContainer>
        <CollectionFilter title={title} products={products} />
      </AppContainer>
    </>
  );
};
export default CollectionPage;
