import React from 'react';

import { Container, Text } from './styles';
import { SimpleLineIcon } from '../../../icons';
import { colors } from '../../../theme';

const Shares: React.FC = () => {
  return (
    <Container>
      <SimpleLineIcon name="share" color={colors.blackLight4} size={13} />
      <Text>12k</Text>
    </Container>
  );
};

export default Shares;
