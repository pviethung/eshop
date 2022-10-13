import { useRef, useState } from 'react';
import DropdownCollapsible from '../../DropdownCollapsible';
import { Product } from '../../models';
import { ColorItem, Colors } from './style';

const getColors = (products: Product[]) => {
  const colors: string[] = [];
  products.forEach((p) => {
    p.tags.forEach((tag) => {
      if (!tag.includes('color:')) return;

      const color = tag.split(':')[1];
      if (!colors.includes(color)) {
        colors.push(color);
      }
    });
  });

  return colors;
};

const CollectionFilterColor = ({
  products,
  onFilterColor,
}: {
  products: Product[];
  onFilterColor: (color: string | null) => void;
}) => {
  const colors = useRef<string[]>(getColors(products));
  const [currentColor, setCurrentColor] = useState<string | null>(null);
  const handleColorClick = (color: string) => {
    return (e: React.MouseEvent) => {
      if (color === currentColor) {
        onFilterColor(null);
        setCurrentColor(null);
        return;
      }
      // toggle active
      //   setActiveSize(size);
      //filter
      setCurrentColor(color);
      onFilterColor(color);
    };
  };

  return (
    <DropdownCollapsible trigger="color">
      <Colors>
        {colors.current.length > 0 &&
          colors.current.map((color) => (
            <ColorItem
              active={color === currentColor}
              onClick={handleColorClick(color)}
              key={color}
              bgColor={color}
              title={color}
            />
          ))}
      </Colors>
    </DropdownCollapsible>
  );
};
export default CollectionFilterColor;
