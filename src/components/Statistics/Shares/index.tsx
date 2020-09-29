import React from 'react';

import { Container, Text } from './styles';
import { SimpleLineIcon } from '../../../icons';
import { colors } from '../../../theme';

type Props = {
  count: number;
};

const Shares: React.FC<Props> = ({ count }) => {
  return (
    <Container>
      <SimpleLineIcon name="share" color={colors.blackLight4} size={13} />
      <Text>{count}</Text>
    </Container>
  );
};

export default Shares;
