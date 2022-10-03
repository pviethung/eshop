import { StyledLogo } from './style';
import { BsHandbag } from 'react-icons/bs';

const Logo = () => {
  return (
    <StyledLogo>
      <h1>
        <BsHandbag />
        <div>
          <span>E</span>
          <span>Shop</span>
          <span>Premium Ecommerce site</span>
        </div>
      </h1>
    </StyledLogo>
  );
};
export default Logo;
