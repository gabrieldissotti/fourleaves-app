import React from 'react';

import { Container, Text } from './styles';
import { colors, shadows } from '../../../theme';
import { IconsMinds } from '../../../icons';

import { IProps } from './interfaces';

const Previous: React.FC<IProps> = ({ isOpen }) => {
  return (
    <Container isOpen={isOpen || false} style={shadows.Default}>
      {isOpen && (
        <>
          <IconsMinds name="left" color={colors.whiteDefault} size={24} />
          <Text>voltar</Text>
        </>
      )}
    </Container>
  );
};

export default Previous;
