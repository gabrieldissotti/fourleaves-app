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
      hasThumbnail={!!thumbnail}
      onPress={onPress}
      style={{ ...shadows.Default, elevation: 0 }}
    >
      <Wrap hasThumbnail={!!thumbnail}>
        <Text>
          {text && text.substring(0, 70)}
          ...
        </Text>
        <Actions>
          <SeeMore>ver mais</SeeMore>
          {/* <Date>quarta-feira, 25 fev. 2019</Date> */}
          <Date>{date}</Date>
        </Actions>
      </Wrap>

      {!!thumbnail && <Thumbnail source={{ uri: thumbnail }} />}

      <Wrapper>
        <Likes count={statistics.likes} />
        <Comments count={statistics.comments} />
        <Shares count={statistics.shares} />
      </Wrapper>
    </Container>
  );
};

export default Item;
