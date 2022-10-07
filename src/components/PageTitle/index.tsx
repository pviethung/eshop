import { StyledPageTitle } from './styles';

const PageTitle = ({ children }: { children: React.ReactNode }) => {
  return <StyledPageTitle>{children}</StyledPageTitle>;
};
export default PageTitle;
