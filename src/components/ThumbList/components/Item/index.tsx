import React from 'react';

import { Container, Thumbnail, Text, Wrap } from './styles';
import DefaultThumbnail from '../../../../../assets/example-page.png';
import { Wrapper, Likes } from '../../../Statistics';

import { IProps } from './interfaces';

const Item: React.FC<IProps> = ({
  thumbnail,
  text,
  statistics,
  index,
  onPress,
}) => {
  return (
    <Container isFirst={index === 0} onPress={onPress}>
      <Thumbnail source={DefaultThumbnail} />
      <Wrap>
        <Text>{text}</Text>
        <Wrapper>
          <Likes />
        </Wrapper>
      </Wrap>
    </Container>
  );
};

export default Item;
