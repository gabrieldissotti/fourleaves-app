import React, { useCallback } from 'react';

import { IconsMinds, SimpleLineIcon } from '../../../../../icons';
import { colors } from '../../../../../theme';

import Step from './components/Step';

import { IStatus } from './components/Step/interfaces';

type Props = {
  step?: number;
};

const Wizard: React.FC<Props> = ({ step }) => {
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

  return (
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
  );
};

export default Wizard;
