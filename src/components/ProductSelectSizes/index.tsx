import { useState } from 'react';
import { Product } from '../../models';
import { ProductSize, ProductSizes } from './style';

const ProductSelectSizes = ({
  onChange,
  sizes,
}: {
  onChange: (size: string) => void;
  sizes: Product['sizes'];
}) => {
  const [currentSize, setCurrentSize] = useState(sizes[0]);

  return (
    <ProductSizes>
      <p>Sizes:</p>
      {sizes.map((size) => (
        <ProductSize
          onClick={(e) => {
            e.stopPropagation();
            setCurrentSize(size);
            onChange(size);
          }}
          key={size}
          active={size === currentSize}
        >
          <input id={size} type="radio" name="select-size" value={size} />
          <label htmlFor={size}>{size}</label>
        </ProductSize>
      ))}
    </ProductSizes>
  );
};
export default ProductSelectSizes;
