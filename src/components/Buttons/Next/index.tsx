import React from 'react';

import { Container } from './styles';
import { shadows } from '../../../theme';

import { Props } from './interfaces';
import Wizard from './components/Wizzard';
import Default from './components/Default';
import Share from './components/Share';

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
