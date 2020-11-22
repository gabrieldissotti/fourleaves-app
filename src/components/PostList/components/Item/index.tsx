import React from 'react';
import { format, parseISO } from 'date-fns';

import {
  Container,
  Thumbnail,
  Text,
  Wrap,
  Actions,
  Date,
  SeeMore,
} from './styles';
import { Wrapper, Likes, Comments, Shares } from '../../../Statistics';
import { shadows } from '../../../../theme';

import { IProps } from './interfaces';
import { dateFnsOptions } from '../../../../constants';

const Item: React.FC<IProps> = ({
  thumbnail,
  text,
  statistics,
  index,
  onPress,
  date,
}) => {
  const formattedDate = format(
    parseISO(date),
    "iiii, d 'de' MMM. 'de' yyyy",
    dateFnsOptions,
  );

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
          <Date>{formattedDate}</Date>
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
