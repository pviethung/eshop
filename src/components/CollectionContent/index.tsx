import { useCallback, useState } from 'react';
import { Product } from '../../models';
import CollectionFilterPrice from '../CollectionFilterPrice';
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
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSelectLayout = (layout: 'grid' | 'list') => {
    setLayout(layout);
  };
  const handleSortProducts = (sortedProducts: Product[]) => {
    setFilteredProducts(sortedProducts);
  };
  const handleNumberOfProducts = (showBy: NumberOfProductsValues) => {
    console.log(showBy);
  };

  const handleFilterPrice = useCallback((filteredProducts: Product[]) => {
    setFilteredProducts(filteredProducts);
  }, []);

  // filter

  return (
    <Container>
      <Row>
        <Col w={1 / 4}>
          <CollectionSidebar>
            {/* <CollectionSidebar products={products} /> */}
            <CollectionFilterPrice
              onFilterPrice={handleFilterPrice}
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
              products={filteredProducts}
              onSortProducts={handleSortProducts}
            />
            <p>{products.length} item(s)</p>
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
