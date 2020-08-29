/* eslint camelcase: "off" */

import {
  useFonts,
  Nunito_400Regular,
  Nunito_600SemiBold,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito';

import { OpenSans_400Regular } from '@expo-google-fonts/open-sans';

import IconsMinds from '../../../assets/fonts/iconsmind/iconsminds.ttf';
import SimpleLineIcon from '../../../assets/fonts/simplelineicon/simplelineicon.ttf';

const Fonts: React.FC = ({ children }: any) => {
  useFonts({
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_700Bold,
    OpenSans_400Regular,
    IconsMinds,
    SimpleLineIcon,
  });

  return children;
};

export default Fonts;
