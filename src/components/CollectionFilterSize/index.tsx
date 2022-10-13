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

  return sizes.push('free size'), sizes;
};
const CollectionFilterSize = ({
  onFilterSize,
  products,
}: {
  products: Product[];
  onFilterSize: (size: string | null) => void;
}) => {
  const sizes = useRef<string[]>(getSizes(products));
  const [currentSize, setCurrentSize] = useState<string | null>(null);
  const handleSizeClick = (size: string) => {
    return (e: React.MouseEvent) => {
      if (size === currentSize) {
        setCurrentSize(null);
        onFilterSize(null);
        return;
      }
      // toggle active
      setCurrentSize(size);
      //filter
      onFilterSize(size);
    };
  };

  return (
    <DropdownCollapsible trigger="size">
      <Sizes>
        {sizes.current.length > 0 &&
          sizes.current.map((size, idx) => (
            <SizeItem
              active={size === currentSize}
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
