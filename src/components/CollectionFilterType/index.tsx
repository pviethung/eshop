import { useRef, useState } from 'react';
import DropdownCollapsible from '../../DropdownCollapsible';
import { Product } from '../../models';
import { TypeItem, Types } from './style';

const getTypes = (products: Product[]) => {
  const initialValue: string[] = [];
  return products.reduce((p1, p2) => {
    return !p1.includes(p2.type) ? (p1.push(p2.type), p1) : p1;
  }, initialValue);
};
const CollectionFilterType = ({
  products,
  onFilterType,
}: {
  products: Product[];
  onFilterType: (type: string | null) => void;
}) => {
  const types = useRef<string[]>(getTypes(products));
  const [currentType, setCurrentType] = useState<string | null>(null);
  const handleTypeClick = (type: string) => {
    return (e: React.MouseEvent) => {
      // toggle
      if (type === currentType) {
        setCurrentType(null);
        onFilterType(null);
        return;
      }

      setCurrentType(type);
      onFilterType(type);
    };
  };

  return (
    <DropdownCollapsible trigger="type">
      <Types>
        {types.current.length > 0 &&
          types.current.map((t, idx) => (
            <TypeItem
              key={idx}
              onClick={handleTypeClick(t)}
              active={t === currentType}
            >
              {t}
            </TypeItem>
          ))}
      </Types>
    </DropdownCollapsible>
  );
};
export default CollectionFilterType;
