import React from 'react';

import { Container, Icon, Title, Description } from './styles';
import { INavigation } from '../../interfaces/general';

interface IProps {
  navigation: INavigation;
}

const Header: React.FC<IProps> = ({ navigation }) => {
  return (
    <Container >
      <Icon onPress={() => navigation.openDrawer()}/>
      <Title>fourleav.es</Title>
      <Description>uma nova experiência em sortear</Description>
    </Container>
  );
};

export default Header;
