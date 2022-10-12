import { useCallback, useState } from 'react';
import { Product } from '../../models';
import { intersectProductLists } from '../../utils';
import CollectionFilterPrice from '../CollectionFilterPrice';
import CollectionFilterSize from '../CollectionFilterSize';
import CollectionLayout from '../CollectionLayout';
import CollectionListItem from '../CollectionListItem';
import CollectionShowBy, { NumberOfProductsValues } from '../CollectionShowBy';
import CollectionSortBy from '../CollectionSortBy';
import Col from '../grid-layout/Col';
import Row from '../grid-layout/Row';
import PageTitle from '../PageTitle';
import { ActionHeader, CollectionSidebar, Container } from './style';

const CollectionContent = ({
  products,
  title,
}: {
  products: Product[];
  title: string;
}) => {
  const [layout, setLayout] = useState<'grid' | 'list'>('grid');
  let filteredProducts: Product[] = [];

  const [sortedProducts, setSortedProducts] = useState(products);
  const [priceFilteredProducts, setPriceFilteredProducts] = useState(products);
  const [sizeFilteredProducts, setSizeFilteredProducts] = useState(products);

  const handleSelectLayout = (layout: 'grid' | 'list') => {
    setLayout(layout);
  };
  const handleNumberOfProducts = (showBy: NumberOfProductsValues) => {
    console.log(showBy);
  };

  const handleSortProducts = (sortedProducts: Product[]) => {
    setSortedProducts(sortedProducts);
  };
  const handleFilterPrice = useCallback((filteredProducts: Product[]) => {
    setPriceFilteredProducts(filteredProducts);
  }, []);

  const handleFilterSize = (filteredProducts: Product[]) => {
    setSizeFilteredProducts(filteredProducts);
  };

  filteredProducts = intersectProductLists([
    sortedProducts,
    priceFilteredProducts,
    sizeFilteredProducts,
  ]);

  return (
    <Container>
      <Row>
        <Col w={1 / 4}>
          <CollectionSidebar>
            <CollectionFilterPrice
              onFilterPrice={handleFilterPrice}
              products={products}
            />
            <CollectionFilterSize
              onFilterSize={handleFilterSize}
              products={products}
            />
          </CollectionSidebar>
        </Col>
        <Col w={2 / 3}>
          <PageTitle>{title}</PageTitle>
          <ActionHeader>
            <CollectionLayout
              onSelectLayout={handleSelectLayout}
              layout={layout}
            />
            <CollectionSortBy
              products={products}
              onSortProducts={handleSortProducts}
            />
            <p>{filteredProducts.length} item(s)</p>
            <CollectionShowBy
              onSelectNumberOfProducts={handleNumberOfProducts}
            />
          </ActionHeader>
          <CollectionListItem products={filteredProducts} />
        </Col>
      </Row>
    </Container>
  );
};
export default CollectionContent;
