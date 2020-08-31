import React from 'react';

import { Container, Thumbnail, Text, Wrap } from './styles';
import DefaultThumbnail from '../../../assets/example-people.png';
import { Link } from '../Text';

import { IProps } from './interfaces';

const Profile: React.FC<IProps> = ({
  thumbnail,
  name,
  onPress,
  navigation,
}) => {
  return (
    <Container onPress={onPress}>
      <Thumbnail source={DefaultThumbnail} />
      <Wrap>
        <Text>{name}</Text>
        <Link
          to="Pages"
          navigation={navigation}
          content="ver perfil no facebook"
          noWhiteSpaceAround
        />
      </Wrap>
    </Container>
  );
};

export default Profile;
