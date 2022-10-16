import Link from 'next/link';
import useSWRImmutable from 'swr/immutable';
import { getCollectionTitles } from '../../services/firebase';
import { NavList, NavListItem, StyledNavBar } from './style';

const NavBar = () => {
  const { data: collections, error } = useSWRImmutable(
    '/collections',
    getCollectionTitles
  );

  return (
    <StyledNavBar>
      <NavList>
        {error && <h2>Something wrong</h2>}
        {collections &&
          collections.map((collection: any) => (
            <Link key={collection.id} href={`/collections/${collection.id}`}>
              <NavListItem>{collection.title}</NavListItem>
            </Link>
          ))}
      </NavList>
    </StyledNavBar>
  );
};
export default NavBar;
