import { Product } from './../models/Product';

const intersect = (p1: Product[], p2: Product[]): Product[] => {
  const a1Len = p1.length;
  const a2Len = p2.length;

  const res = [];

  for (let i = 0, index = 0; i < a1Len; i++) {
    let j = 0;
    let k = 0;

    while (p2[j]?.id !== p1[i]?.id && j < a2Len) {
      j++;
    }

    while (res[k]?.id !== p1[i]?.id && k < index) {
      k++;
    }

    if (j !== a2Len && k === index) {
      res[index++] = p1[i];
    }
  }

  return res;
};

export const intersectProductLists = (productLists: Product[][]) => {
  return productLists.reduce((p1, p2) => {
    return intersect(p1, p2);
  });
};
