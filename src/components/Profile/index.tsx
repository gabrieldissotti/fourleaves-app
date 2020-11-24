import React from 'react';

import { Container, Thumbnail, Text, Wrap } from './styles';
import { Link } from '../Text';

import { Props } from './interfaces';

const Profile: React.FC<Props> = ({ thumbnail, name, onPress, link }) => {
  return (
    <Container onPress={onPress}>
      <Thumbnail source={{ uri: thumbnail }} />
      <Wrap>
        <Text>{name}</Text>
        {link && <Link href={link} content="ver perfil no facebook" />}
      </Wrap>
    </Container>
  );
};

export default Profile;
