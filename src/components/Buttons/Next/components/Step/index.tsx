import React, { memo } from 'react';

import { Container, RightTrace } from './styles';
import { IProps } from './interfaces';

const Step: React.FC<IProps> = ({ status, children, fullRightTrace }) => {
  return (
    <>
      <Container status={status}>{children}</Container>
      <RightTrace status={status} fullRightTrace={fullRightTrace} />
    </>
  );
};

export default memo(Step);
