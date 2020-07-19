import React, { useState } from 'react';

import { Container, FullBar, LowerBar } from './styles';

const MenuBurger: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container onPress={() => setIsOpen(!isOpen)}>
      {isOpen ? (
        <>
          <LowerBar />
          <FullBar/>
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
}

export default MenuBurger;