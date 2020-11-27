import React from 'react';

import { useNavigation, DrawerActions } from '@react-navigation/native';
import { Container, Icon, Title, Description } from './styles';
import { IProps } from './interfaces';

const Header: React.FC<IProps> = () => {
  const navigation = useNavigation();

  const state = navigation.dangerouslyGetState();

  const activeRoute: string = state.routes[state.index].name;

  const options: any = {
    SignIn: {
      title: 'sorteiu.com',
      description: 'uma nova experiência',
    },
    Pages: {
      title: 'Selecione a página',
      description: 'em qual página você publicou o sorteio?',
    },
    Posts: {
      title: 'Selecione a publicação',
      description: 'qual é a publicação do sorteio?',
    },
    Requirements: {
      title: 'Selecione os critérios',
      description: 'como as pessoas podem participar?',
    },
    Awarded: {
      title: 'Premiação',
      description: 'confira quem foi premiado',
    },
    Contact: {
      title: 'Contate-nos',
      description: 'saiba como entrar em contato conosco',
    },
  };

  return (
    <Container>
      <Icon onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
      <Title>{options[activeRoute]?.title || '...'}</Title>
      <Description>{options[activeRoute]?.description || '...'}</Description>
    </Container>
  );
};

export default Header;
