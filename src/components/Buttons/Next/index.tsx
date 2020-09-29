import React, { memo, useCallback } from 'react';
import { IconsMinds, SimpleLineIcon } from '../../../icons';

import { Container, Text } from './styles';
import { colors, shadows } from '../../../theme';
import { Step } from './components';

import { Props } from './interfaces';
import { IStatus } from './components/Step/interfaces';

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

  const getStatusByElementStaticStep = useCallback(
    (elementStep: number): IStatus => {
      const actualStep = step || 1;

      if (actualStep && actualStep < elementStep) {
        return 'disabled';
      }
      if (actualStep && actualStep > elementStep) {
        return 'visualized';
      }

      return 'active';
    },
    [step],
  );

  const Wizard = memo(() => (
    <>
      <Step status={getStatusByElementStaticStep(1)}>
        <SimpleLineIcon name="flag" color={colors.blackDefault} size={14} />
      </Step>

      <Step status={getStatusByElementStaticStep(2)}>
        <IconsMinds name="newspaper" color={colors.blackDefault} size={14} />
      </Step>

      <Step status={getStatusByElementStaticStep(3)} fullRightTrace>
        <IconsMinds name="check" color={colors.blackDefault} size={14} />
      </Step>
    </>
  ));

  const Default = memo(() => (
    <>
      <Text>{text}</Text>
      <IconsMinds name="right" color={colors.blackDefault} size={24} />
    </>
  ));

  const Share = memo(() => (
    <>
      <Text>{text}</Text>
      <SimpleLineIcon name="share" color={colors.blackDefault} size={20} />
    </>
  ));

  const renderButtonByModeProp = useCallback(() => {
    switch (mode) {
      case 'wizard':
        return <Wizard />;

      case 'share':
        return <Share />;

      default:
        return <Default />;
    }
  }, [mode]);

  return (
    <Container onPress={handleNavigation} mode={mode} style={shadows.Default}>
      {renderButtonByModeProp()}
    </Container>
  );
};

export default Next;
