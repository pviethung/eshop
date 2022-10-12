import React, { useRef, useState } from 'react';
import DropdownCollapsible from '../../DropdownCollapsible';
import { Product } from '../../models';
import { SizeItem, Sizes } from './style';

const getSizes = (products: Product[]): string[] => {
  const sizes: string[] = [];
  products.forEach((p) => {
    p.sizes.forEach((size) => {
      if (!sizes.includes(size)) {
        sizes.push(size);
      }
    });
  });

  return sizes.push('free size', 'all'), sizes;
};
const CollectionFilterSize = ({
  onFilterSize,
  products,
}: {
  products: Product[];
  onFilterSize: (products: Product[]) => void;
}) => {
  const sizes = useRef<string[]>(getSizes(products));
  const [activeSize, setActiveSize] = useState('');

  const handleActiveSize = () => {};
  const handleSizeClick = (size: string) => {
    return (e: React.MouseEvent) => {
      // toggle active
      setActiveSize(size);

      //filter
      const filteredProducts =
        size === 'all'
          ? [...products]
          : size === 'free size'
          ? products.filter((p) => {
              return p.sizes.length === 0;
            })
          : products.filter((p) => {
              return p.sizes.includes(size);
            });

      onFilterSize(filteredProducts);
    };
  };

  return (
    <DropdownCollapsible trigger="size">
      <Sizes>
        {sizes.current.length > 0 &&
          sizes.current.map((size, idx) => (
            <SizeItem
              active={size === activeSize}
              onClick={handleSizeClick(size)}
              key={idx}
            >
              {size}
            </SizeItem>
          ))}
      </Sizes>
    </DropdownCollapsible>
  );
};
export default CollectionFilterSize;
