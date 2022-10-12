import { useCallback, useState } from 'react';
import { Product } from '../../models';
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

interface FilterTypes {
  price: {
    min: number;
    max: number;
  };
  size: string;
  sort: {
    property: keyof Product;
    order: 'asc' | 'desc';
  };
}

const filterController = (products: Product[], filter: FilterTypes) => {
  let rs: Product[] = products;

  if (filter.price) {
    rs = products.filter((product) => {
      return (
        product.price >= filter.price.min && product.price <= filter.price.max
      );
    });
  }

  if (filter.size) {
    rs =
      filter.size === 'all'
        ? [...rs]
        : filter.size === 'free size'
        ? rs.filter((p) => {
            return p.sizes.length === 0;
          })
        : rs.filter((p) => {
            return p.sizes.includes(filter.size);
          });
  }

  if (filter.sort) {
    rs = [
      ...rs.sort((a, b) => {
        if (a[filter.sort.property] > b[filter.sort.property]) return 1;
        if (a[filter.sort.property] < b[filter.sort.property]) return -1;
        return 0;
      }),
    ];
    if (filter.sort.order === 'desc') rs.reverse();
  }

  return [...rs];
};

////////////////////////

const CollectionContent = ({
  products,
  title,
}: {
  products: Product[];
  title: string;
}) => {
  const [layout, setLayout] = useState<'grid' | 'list'>('grid');
  const [filter, setFilter] = useState<FilterTypes | null>(null);
  let filteredProducts = products;

  const handleSelectLayout = (layout: 'grid' | 'list') => {
    setLayout(layout);
  };
  const handleNumberOfProducts = (showBy: NumberOfProductsValues) => {
    console.log(showBy);
  };

  const handleSortProducts = (
    property: keyof Product,
    order: 'asc' | 'desc'
  ) => {
    setFilter(
      (prevFilter) =>
        ({
          ...prevFilter,
          sort: {
            property,
            order,
          },
        } as FilterTypes)
    );
  };
  const handleFilterPrice = useCallback((min: number, max: number) => {
    setFilter(
      (prevFilter) =>
        ({
          ...prevFilter,
          price: {
            min,
            max,
          },
        } as FilterTypes)
    );
  }, []);
  const handleFilterSize = (size: string) => {
    setFilter((prevFilter) => ({ ...prevFilter, size } as FilterTypes));
  };

  if (filter) {
    filteredProducts = filterController(products, filter) as Product[];
  }

  return (
    <Container>
      <Row>
        <Col w={1 / 4}>
          <CollectionSidebar>
            <CollectionFilterPrice onFilterPrice={handleFilterPrice} />
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
