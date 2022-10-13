import { Product } from './../../models/Product';
import { FilterTypes } from './types';

export const filterController = (products: Product[], filter: FilterTypes) => {
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
      filter.size === 'free size'
        ? rs.filter((p) => {
            return p.sizes.length === 0;
          })
        : rs.filter((p) => {
            return p.sizes.includes(filter.size);
          });
  }

  if (filter.color) {
    rs = rs.filter((p) => {
      return p.tags.includes(`color:${filter.color}`);
    });
  }

  if (filter.vendor) {
    rs = rs.filter((p) => {
      return p.vendor === filter.vendor;
    });
  }

  if (filter.type) {
    rs = rs.filter((p) => {
      return p.type === filter.type;
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

  return rs;
};
