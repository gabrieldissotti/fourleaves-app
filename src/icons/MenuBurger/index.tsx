import React from 'react';
import { useIsDrawerOpen } from '@react-navigation/drawer';

import { Container, FullBar, LowerBar } from './styles';

const MenuBurger: React.FC = (props: any) => {
  const isDrawerOpen = useIsDrawerOpen();

  return (
    <Container {...props}>
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
