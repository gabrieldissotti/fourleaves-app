import React from 'react';

import { Container, Text, Title } from './styles';

import { Previous } from '../../components/Buttons';
import { Link } from '../../components/Text';

const Contact: React.FC = () => {
  return (
    <Container>
      <Title>Olá,</Title>

      <Text>
        Para tirar dúvidas, dar feedback, reportar vulnerábilidades ou outros
        assuntos, você pode entrar em contato através do email:
      </Text>
      <Link
        to="mailto:gabrieldnrodrigues@gmail.com"
        content="gabrieldnrodrigues@gmail.com"
        isToWeb
      />

      <Text> </Text>

      <Text>Responderemos o quanto antes se for necessário</Text>

      <Text> </Text>

      <Text>Suas sugestões são muito bem-vindas</Text>

      <Previous />
    </Container>
  );
};

export default Contact;
