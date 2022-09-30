import { AppContainer } from '../GlobalStyle';
import { ActionItem, Actions, Logo, StyledHeader } from './style';
import { BsHandbag, BsSearch, BsPerson } from 'react-icons/bs';

const Header = () => {
  return (
    <AppContainer>
      <StyledHeader>
        <Logo>
          <h1>
            <BsHandbag />
            <div>
              <span>E</span>
              <span>Shop</span>
              <span>Premium Ecommerce site</span>
            </div>
          </h1>
        </Logo>
        <Actions>
          <ActionItem>
            <BsSearch />
          </ActionItem>
          <ActionItem width={28}>
            <BsPerson />
          </ActionItem>
          <ActionItem>
            <BsHandbag />
          </ActionItem>
        </Actions>
      </StyledHeader>
    </AppContainer>
  );
};
export default Header;
