import { CgLayoutGridSmall, CgLayoutList } from 'react-icons/cg';
import { useTheme } from 'styled-components';
import { Container } from './style';

const CollectionLayout = ({
  layout,
  onSelectLayout,
}: {
  layout: string;
  onSelectLayout: (layout: 'list' | 'grid') => void;
}) => {
  const { mainColor, grayColor } = useTheme();
  return (
    <Container>
      <CgLayoutGridSmall
        onClick={(e) => onSelectLayout('grid')}
        color={layout === 'grid' ? mainColor : grayColor}
      />
      <CgLayoutList
        onClick={(e) => onSelectLayout('list')}
        color={layout === 'list' ? mainColor : grayColor}
      />
    </Container>
  );
};
export default CollectionLayout;
