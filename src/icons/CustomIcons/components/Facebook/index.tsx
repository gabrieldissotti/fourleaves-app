import React from 'react';

// import { Container } from './styles';
import Svg, { Path } from 'react-native-svg';
import { IIconProps } from '../../../interfaces';

const Facebook: React.FC<any> = ({ color }: IIconProps) => {
  return (
    <Svg width={13} height={24} viewBox="0 0 13 24" fill="none">
      <Path
        d="M8.117 2.229H10.172l-.01 2.2H8.257a.9.9 0 00-1.025.9v3.496h3.71l-.518 2.2h-3.2v11.013h-2.2V11.025H2.092l-.006-2.2h2.931V5.401a2.921 2.921 0 013.1-3.172zm0-1.469a5.019 5.019 0 00-2.538.676A4.3 4.3 0 003.547 5.4v1.955H2.089A1.468 1.468 0 00.62 8.829l.006 2.2a1.47 1.47 0 001.469 1.464h1.452v9.543a1.469 1.469 0 001.469 1.469h2.2a1.469 1.469 0 001.469-1.469v-9.542h1.742a1.469 1.469 0 001.41-1.055l.518-2.2a1.469 1.469 0 00-1.408-1.884H8.703V5.906h1.46a1.469 1.469 0 001.469-1.461l.015-2.131v-.082a1.467 1.467 0 00-1.47-1.468h-2.06V.76z"
        fill={color || '#ffffff'}
      />
    </Svg>
  );
};

export default Facebook;
