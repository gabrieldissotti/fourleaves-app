import React from 'react';

import { Container, Text } from './styles';
import { colors, shadows } from '../../../theme';
import { IconsMinds } from '../../../icons';

import { IProps } from './interfaces';

const Previous: React.FC<IProps> = ({ isOpen, navigation, to, isRepeat }) => {
  const handleNavigation = () => navigation?.navigate(to);

  return (
    <Container
      isOpen={isOpen || false}
      style={shadows.Default}
      onPress={handleNavigation}
    >
      {isOpen && isRepeat && (
        <>
          <IconsMinds name="repeat-6" color={colors.whiteDefault} size={20} />
          <Text>repetir</Text>
        </>
      )}

      {isOpen && !isRepeat && (
        <>
          <IconsMinds name="left" color={colors.whiteDefault} size={24} />
          <Text>voltar</Text>
        </>
      )}
    </Container>
  );
};

export default Previous;
