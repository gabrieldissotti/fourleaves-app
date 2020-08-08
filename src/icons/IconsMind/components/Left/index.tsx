import React from 'react';

// import { Container } from './styles';
import Svg, { Path } from 'react-native-svg';
import { IIconProps } from '../../../interfaces';

const Left: React.FC<any> = ({ color }: IIconProps) => {
  return (
    <Svg width={23} height={14} viewBox="0 0 23 14" fill="none">
      <Path
        d="M4.49 13.005a.461.461 0 01-.384-.216L.096 7.29a.505.505 0 010-.576L4.105 1.22a.476.476 0 01.7-.12.5.5 0 01.1.7L1.104 7.005l3.794 5.2a.5.5 0 01-.408.8zm18.006-5.5H.504a.504.504 0 010-1.008h21.992a.504.504 0 110 1.008z"
        fill={color || '#ffffff'}
      />
    </Svg>
  );
};

export default Left;
