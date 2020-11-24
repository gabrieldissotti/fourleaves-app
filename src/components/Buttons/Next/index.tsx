import React, { useCallback } from 'react';

import { Container } from './styles';
import { shadows } from '../../../theme';

import { Props } from './interfaces';
import Wizard from './components/Wizzard';
import Default from './components/Default';
import Share from './components/Share';

const Next: React.FC<Props> = ({
  text,
  navigation,
  isDisabled,
  to,
  mode,
  step,
  onPress,
}) => {
  const handleNavigation = useCallback((): void => {
    if (isDisabled) {
      return;
    }

    if (onPress) {
      onPress();
      return;
    }

    navigation.navigate(to);
  }, [isDisabled, navigation, onPress, to]);

  const renderButtonByMode = () => {
    switch (mode) {
      case 'wizard':
        return <Wizard step={step} />;

      case 'share':
        return <Share text={text} />;

      default:
        return <Default text={text} />;
    }
  };

  return (
    <Container
      onPress={handleNavigation}
      mode={mode}
      style={shadows.Default}
      isDisabled={!!isDisabled}
    >
      {renderButtonByMode()}
    </Container>
  );
};

export default Next;
