import React from 'react';

import {
  Container,
  Thumbnail,
  Text,
  Wrap,
  Actions,
  Date,
  SeeMore,
} from './styles';
import DefaultThumbnail from '../../../../../assets/example-post.png';
import { Wrapper, Likes, Comments, Shares } from '../../../Statistics';
import { shadows } from '../../../../theme';

import { IProps } from './interfaces';

const Item: React.FC<IProps> = ({
  thumbnail,
  text,
  statistics,
  index,
  onPress,
  date,
}) => {
  return (
    <Container
      isFirst={index === 0}
      onPress={onPress}
      style={{ ...shadows.Default, elevation: 0 }}
    >
      <Wrap>
        <Text>
          {text.substring(0, 70)}
          ...
        </Text>
        <Actions>
          <SeeMore>ver mais</SeeMore>
          <Date>quarta-feira, 25 fev. 2019</Date>
        </Actions>
      </Wrap>
      <Thumbnail source={DefaultThumbnail} />
      <Wrapper>
        <Likes />
        <Comments />
        <Shares />
      </Wrapper>
    </Container>
  );
};

export default Item;
