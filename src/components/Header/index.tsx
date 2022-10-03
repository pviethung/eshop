import { AppContainer } from '../GlobalStyle';
import { ActionItem, Actions, StyledHeader } from './style';
import { BsHandbag, BsSearch, BsPerson } from 'react-icons/bs';
import Logo from '../Logo';

const Header = () => {
  return (
    <AppContainer>
      <StyledHeader>
        <Logo />
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
