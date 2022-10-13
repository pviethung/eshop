import { useCallback, useState } from 'react';
import { Product } from '../../models';
import CollectionFilterColor from '../CollectionFilterColor';
import CollectionFilterPrice from '../CollectionFilterPrice';
import CollectionFilterSize from '../CollectionFilterSize';
import CollectionFilterType from '../CollectionFilterType';
import CollectionLayout, { Layout } from '../CollectionLayout';
import CollectionListItem from '../CollectionListItem';
import CollectionShowBy, { NumberOfProductsValues } from '../CollectionShowBy';
import CollectionSortBy from '../CollectionSortBy';
import CollectionVendorFilter from '../CollectionVendorFilter';
import Col from '../grid-layout/Col';
import Row from '../grid-layout/Row';
import PageTitle from '../PageTitle';
import { filterController } from './filterController';
import { ActionHeader, CollectionSidebar, Container } from './style';
import { FilterTypes } from './types';

const CollectionFilter = ({
  products,
  title,
}: {
  products: Product[];
  title: string;
}) => {
  const [layout, setLayout] = useState<Layout>('grid');
  const [filter, setFilter] = useState<FilterTypes | null>(null);
  let filteredProducts = products;

  const handleNumberOfProducts = (showBy: NumberOfProductsValues) => {
    console.log(showBy);
  };

  const handleSelectLayout = (layout: Layout) => {
    setLayout(layout);
  };
  const handleFilter = useCallback((filterBy: keyof FilterTypes) => {
    return (filterValue: FilterTypes[keyof FilterTypes]) =>
      setFilter(
        (prevFilter) =>
          ({
            ...prevFilter,
            [filterBy]: filterValue,
          } as FilterTypes)
      );
  }, []);

  if (filter) {
    filteredProducts = filterController(
      [...products /* returns default if not sorted */],
      filter
    ) as Product[];
  }

  return (
    <Container>
      <Row>
        <Col w={1 / 4}>
          <CollectionSidebar>
            <CollectionFilterPrice onFilterPrice={handleFilter('price')} />
            <CollectionFilterSize
              onFilterSize={handleFilter('size')}
              products={products}
            />
            <CollectionFilterColor
              onFilterColor={handleFilter('color')}
              products={products}
            />
            <CollectionVendorFilter
              onFilterVendor={handleFilter('vendor')}
              products={products}
            />
            <CollectionFilterType
              products={products}
              onFilterType={handleFilter('type')}
            />
          </CollectionSidebar>
        </Col>
        <Col w={2 / 3}>
          <PageTitle>{title}</PageTitle>
          <ActionHeader>
            <CollectionLayout onSelectLayout={handleSelectLayout} />
            <CollectionSortBy onSortProducts={handleFilter('sort')} />
            <p>{filteredProducts.length} item(s)</p>
            <CollectionShowBy
              onSelectNumberOfProducts={handleNumberOfProducts}
            />
          </ActionHeader>
          <CollectionListItem
            horizontal={layout === 'list' || false}
            products={filteredProducts}
          />
        </Col>
      </Row>
    </Container>
  );
};
export default CollectionFilter;
