import React, { useCallback, useMemo, useState } from 'react';
import { format, parseISO } from 'date-fns';

import {
  Container,
  Thumbnail,
  Text,
  Wrap,
  Actions,
  Date,
  SeeMore,
  ClickableArea,
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
  const [isShowingMore, setIsShowingMore] = useState(false);

  const formattedDate = format(
    parseISO(date),
    "iiii, d 'de' MMM. 'de' yyyy",
    dateFnsOptions,
  );

  const toggleShowingMore = useCallback(
    () => setIsShowingMore(!isShowingMore),
    [isShowingMore],
  );

  const formattedText = useMemo(() => text || '', [text]);

  return (
    <Container
      isFirst={index === 0}
      hasThumbnail={!!thumbnail}
      onPress={onPress}
      style={{ ...shadows.Default, elevation: 0 }}
    >
      <Wrap hasThumbnail={!!thumbnail}>
        <Text>
          {isShowingMore
            ? formattedText
            : `${formattedText?.substring(0, 70)}...`}
        </Text>
        <Actions>
          {formattedText.length > 70 && (
            <ClickableArea onPress={toggleShowingMore}>
              <SeeMore>{isShowingMore ? 'ver menos' : 'ver mais'}</SeeMore>
            </ClickableArea>
          )}

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
