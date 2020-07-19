import React from 'react';
import { useIsDrawerOpen } from '@react-navigation/drawer';

import { Container, FullBar, LowerBar } from './styles';

const MenuBurger: React.FC = () => {
  const isDrawerOpen = useIsDrawerOpen();

  return (
    <Container>
      {!isDrawerOpen ? (
        <>
          <LowerBar />
          <FullBar />
          <LowerBar />
        </>
      ) : (
        <>
          <FullBar rotate />
          <FullBar invertedRotate />
        </>
      )}
    </Container>
  );
};

export default MenuBurger;
