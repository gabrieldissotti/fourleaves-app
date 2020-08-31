import React from 'react';

// import { Container } from './styles';
import Svg, { Path } from 'react-native-svg';
import { IIconProps } from '../../../interfaces';

const Check: React.FC<any> = ({ color }: IIconProps) => {
  return (
    <Svg width={13} height={10} viewBox="0 0 13 10" fill="none">
      <Path
        d="M12.622 1.017L3.967 9.672 0 5.71l1.017-1.017 2.95 2.943L11.605 0l1.017 1.017z"
        fill="#fff"
      />
    </Svg>
  );
};

export default Check;
