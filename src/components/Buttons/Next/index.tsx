import React, { useCallback } from 'react';
import { SimpleLineIcon } from '../../../icons';

import { Container, Text } from './styles';
import { colors, shadows } from '../../../theme';

import { Props } from './interfaces';
import Wizard from './components/Wizzard';
import Default from './components/Default';

const Next: React.FC<Props> = ({
  text,
  navigation,
  to,
  mode,
  step,
  onPress,
}) => {
  const handleNavigation = () => {
    if (onPress) {
      return onPress();
    }

    return navigation?.navigate(to);
  };

  const Share = useCallback(
    () => (
      <>
        <Text>{text}</Text>
        <SimpleLineIcon name="share" color={colors.blackDefault} size={20} />
      </>
    ),
    [text],
  );

  const renderButtonByMode = () => {
    switch (mode) {
      case 'wizard':
        return <Wizard step={step} />;

      case 'share':
        return <Share />;

      default:
        return <Default text={text} />;
    }
  };

  return (
    <Container onPress={handleNavigation} mode={mode} style={shadows.Default}>
      {renderButtonByMode()}
    </Container>
  );
};

export default Next;
