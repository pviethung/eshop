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
import FireStoreParser from 'firestore-parser';
import { ProductTabs } from '../../components/ProductContent/style';
import ProductReviews from '../../components/ProductReviews';
import SizeGuide from '../../components/SizeGuide';
import Tabs from '../../components/Tabs';

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
  unparsedProduct: any;
}

export const getStaticPaths: GetStaticPaths<{
  productId: string;
}> = async () => {
  try {
    const ids = await getProductIds();

    return {
      paths: ids.map((id: any) => ({
        params: {
          productId: id.id,
        },
      })),
      fallback: false,
    };
  } catch (err) {
    throw err;
  }
};

export const getStaticProps: GetStaticProps<
  PageProps,
  { productId: string }
> = async ({ params }) => {
  const productId = params?.productId;

  if (!productId)
    return {
      notFound: true,
    };

  try {
    const rs = await getProduct(productId);

    const unparsedProduct = { ...rs };
    const product = FireStoreParser(rs);

    return {
      props: {
        unparsedProduct,
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

      {product && (
        <Row>
          <Col w={1 / 2}>
            <ProductSliderThumbs images={product.images} />
          </Col>
          <Col w={1 / 2}>
            <ProductContent product={product} />
            <ProductTabs>
              <Tabs
                activeTab={0}
                tabs={[
                  { 'Size guide': <SizeGuide /> },
                  {
                    'Comments': (
                      <ProductReviews
                        productId={product.id}
                        // use this prop for post reviews to firestore api
                      />
                    ),
                  },
                ]}
              />
            </ProductTabs>
          </Col>
        </Row>
      )}
    </AppContainer>
  );
};
export default ProductPage;
