import { GetStaticPaths, GetStaticProps } from 'next';
import Divider from '../../components/Divider';
import { AppContainer } from '../../components/GlobalStyle';
import Col from '../../components/grid-layout/Col';
import Row from '../../components/grid-layout/Row';
import ProductContent from '../../components/ProductContent';
import ProductSliderThumbs from '../../components/ProductSliderThumbs';
import { Product } from '../../models';
import { getProduct, getProductIds } from '../../services/firebase';

//@ts-ignore

const DUMMY: Product = {
  id: '1',
  inventory_quantity: 10,
  title: 'denim field jacket',
  price: 300,
  compare_at_price: 0,
  vendor: 'brand A',
  type: 'dress',
  description:
    'Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.',
  sizes: ['s', 'm', 'l', 'xl'],
  images: [
    'https://cdn.shopify.com/s/files/1/1473/1066/products/CONTRAST_FRILLED_DRESS_2048x2048.jpg?v=1473763887',
    'https://cdn.shopify.com/s/files/1/1473/1066/products/CONTRAST_FRILLED_DRESS_1_2048x2048.jpg?v=1473763889',
    'https://cdn.shopify.com/s/files/1/1473/1066/products/CONTRAST_FRILLED_DRESS_2_2048x2048.jpg?v=1473763891',
    'https://cdn.shopify.com/s/files/1/1473/1066/products/CONTRAST_FRILLED_DRESS_3_2048x2048.jpg?v=1473763893',
  ],
  tags: ['vintage', 'women', 'club dresses'],
  reviews: [],
};

interface PageProps {
  product: null | Product;
}

export const getStaticPaths: GetStaticPaths<{
  productId: string;
}> = async () => {
  // const test = rs.map((i: any) => {
  //   console.log(FireStoreParser(i.fields));
  // });
  // console.log(FireStoreParser(rs[0].fields));

  return {
    paths: [{ params: { productId: '3yTxnxt3H3h26hVwQAnM' } }],
    fallback: false, // can also be true or 'blocking'
  };
};
export const getStaticProps: GetStaticProps<
  PageProps,
  { productId: string }
> = async ({ params }) => {
  const productId = params?.productId;

  //TODO if productId undef
  if (!productId)
    return {
      notFound: true,
    };

  try {
    const product = await getProduct(productId);
    const rs = await getProductIds();

    // console.log('[server side parsed product]', product);

    return {
      props: {
        product,
      },
    };
  } catch (err) {
    throw err;
  }
};

const ProductPage = ({ product }: PageProps) => {
  return (
    <AppContainer>
      <Divider x={60} />

      {/* TODOs redirect to 404 */}
      {!product && <h2>Product not found</h2>}
      {product && (
        <Row>
          <Col w={1 / 2}>
            <ProductSliderThumbs images={product.images} />
          </Col>
          <Col w={1 / 2}>
            <ProductContent product={product} />
          </Col>
        </Row>
      )}
    </AppContainer>
  );
};
export default ProductPage;
