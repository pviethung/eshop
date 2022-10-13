import { useRef, useState } from 'react';
import DropdownCollapsible from '../../DropdownCollapsible';
import { Product } from '../../models';
import { VendorItem, Vendors } from './style';

const getVendors = (products: Product[]) => {
  const initialValue: string[] = [];
  return products.reduce((p1, p2) => {
    return !p1.includes(p2.vendor) ? (p1.push(p2.vendor), p1) : p1;
  }, initialValue);
};

const CollectionVendorFilter = ({
  products,
  onFilterVendor,
}: {
  products: Product[];
  onFilterVendor: (vendor: string | null) => void;
}) => {
  const vendors = useRef<string[]>(getVendors(products));
  const [currentVendor, setCurrentVendor] = useState<string | null>(null);
  const handleVendorClick = (vendor: string) => {
    return (e: React.MouseEvent) => {
      if (vendor === currentVendor) {
        setCurrentVendor(null);
        onFilterVendor(null);
        return;
      }
      setCurrentVendor(vendor);
      onFilterVendor(vendor);
    };
  };

  return (
    <DropdownCollapsible trigger="vendor">
      <Vendors>
        {vendors.current.length > 0 &&
          vendors.current.map((v, idx) => (
            <VendorItem
              active={currentVendor === v}
              onClick={handleVendorClick(v)}
              key={idx}
            >
              {v}
            </VendorItem>
          ))}
      </Vendors>
    </DropdownCollapsible>
  );
};
export default CollectionVendorFilter;
