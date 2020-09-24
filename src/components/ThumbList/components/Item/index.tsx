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
  const displayText = text.length > 26 ? `${text.substr(0, 26)}...` : text;

  return (
    <Container isFirst={index === 0} onPress={onPress}>
      <Thumbnail source={{ uri: thumbnail }} />
      <Wrap>
        <Text>{displayText}</Text>
        <Wrapper>
          <Likes />
        </Wrapper>
      </Wrap>
    </Container>
  );
};

export default Item;
