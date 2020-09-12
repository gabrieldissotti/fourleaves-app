import React, { useContext, useEffect } from 'react';
import CheckList from '../../components/CheckList';

import { Container } from './styles';
import { Previous, Next } from '../../components/Buttons';

import mock from '../../components/CheckList/mock';
import { IProps } from './interfaces';
import { HeaderContext } from '../../context/HeaderContext';

const Requirements: React.FC<IProps> = ({ navigation }) => {
  const header = useContext(HeaderContext);

  useEffect(() => {
    header.changeHeaderTitleAndDescription({
      title: 'Selecione os critérios',
      description: 'como as pessoas podem participar?',
    });
  }, []);

  return (
    <Container>
      <CheckList data={mock} navigation={navigation} />
      <Previous isOpen navigation={navigation} to="Posts" />
      <Next mode="wizard" step={3} />
    </Container>
  );
};

export default Requirements;
