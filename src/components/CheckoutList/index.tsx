import Image from 'next/image';
import { CartLineItem } from '../../models';
import { moneyFormat } from '../../utils';
import {
  Container,
  ItemContent,
  ItemImage,
  ItemPrice,
  ListProduct,
  ProductItem,
} from './style';

const CheckoutList = ({ items }: { items: CartLineItem[] }) => {
  return (
    <Container>
      <ListProduct>
        {items.length > 0 &&
          items.map((item) =>
            Object.entries(item.variants).map(([variant, quantity]) => (
              <ProductItem key={`${item.id}_${variant}`}>
                <ItemImage>
                  <Image
                    src={item.images[0]}
                    alt={item.title}
                    width={100}
                    height={120}
                  />
                </ItemImage>
                <ItemContent>
                  <h3>{item.title}</h3>
                  <p>{variant}</p>
                  <p>{quantity} item(s)</p>
                </ItemContent>
                <ItemPrice>{moneyFormat(quantity * item.price)}</ItemPrice>
              </ProductItem>
            ))
          )}
      </ListProduct>
    </Container>
  );
};
export default CheckoutList;
