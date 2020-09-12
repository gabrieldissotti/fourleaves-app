import React, { useContext } from 'react';

import { HeaderContext } from '../../../../context/HeaderContext';
import { Container, Icon, Title, Description } from './styles';
import { IProps } from './interfaces';

const Header: React.FC<IProps> = ({ navigation }) => {
  const header = useContext(HeaderContext);

  return (
    <Container>
      <Icon onPress={() => navigation.openDrawer()} />
      <Title>{header.title}</Title>
      <Description>{header.description}</Description>
    </Container>
  );
};

export default Header;
