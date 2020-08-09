import React from 'react';

import { Container, Thumbnail, Text, Wrap } from './styles';
import DefaultThumbnail from '../../../../../assets/example-page.png';
import { Wrapper, Like } from '../../../Statistics';

import { IProps } from './interfaces';

const Item: React.FC<IProps> = ({ thumbnail, text, statistics }) => {
  return (
    <Container>
      <Thumbnail source={DefaultThumbnail} />
      <Wrap>
        <Text>{text}</Text>
        <Wrapper>
          <Like />
        </Wrapper>
      </Wrap>
    </Container>
  );
};

export default Item;
