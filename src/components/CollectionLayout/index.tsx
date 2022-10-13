import React, { useState } from 'react';
import { CgLayoutGridSmall, CgLayoutList } from 'react-icons/cg';
import { useTheme } from 'styled-components';
import { Container } from './style';

export type Layout = 'list' | 'grid';

const CollectionLayout = ({
  onSelectLayout,
}: {
  onSelectLayout: (layout: Layout) => void;
}) => {
  const { mainColor, grayColor } = useTheme();
  const [currentLayout, setCurrentLayout] = useState<Layout>('grid');
  const handleChangeLayout = (layout: Layout) => {
    return (e: React.MouseEvent) => {
      onSelectLayout(layout);
      setCurrentLayout(layout);
    };
  };

  return (
    <Container>
      <CgLayoutGridSmall
        onClick={handleChangeLayout('grid')}
        color={currentLayout === 'grid' ? mainColor : grayColor}
      />
      <CgLayoutList
        onClick={handleChangeLayout('list')}
        color={currentLayout === 'list' ? mainColor : grayColor}
      />
    </Container>
  );
};
export default CollectionLayout;
