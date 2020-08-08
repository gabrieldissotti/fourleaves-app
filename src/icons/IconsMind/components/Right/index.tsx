import React from 'react';

// import { Container } from './styles';
import Svg, { Path } from 'react-native-svg';
import { IIconProps } from '../../../interfaces';

const Right: React.FC<any> = ({ color }: IIconProps) => {
  return (
    <Svg width={23} height={14} viewBox="0 0 23 14" fill="none">
      <Path
        d="M18.499 12.005a.382.382 0 01-.288-.1.482.482 0 01-.12-.7l3.791-5.2L18.091.796a.5.5 0 01.816-.576l3.983 5.494a.438.438 0 010 .576l-3.983 5.494a.5.5 0 01-.408.216v.005zm3.983-5.5H.504a.504.504 0 010-1.008h21.978a.504.504 0 110 1.008z"
        fill={color || '#ffffff'}
      />
    </Svg>
  );
};

export default Right;
