import React, { useContext } from 'react';
import { Next } from '../../../../components/Buttons';

import { AuthContext } from '../../../../context/AuthContext';

type Props = {
  navigation: any;
};

const CustomNext: React.FC<Props> = ({ navigation }) => {
  const auth = useContext(AuthContext);

  return (
    <Next
      text="Entrar com o facebook"
      navigation={navigation}
      to="Pages"
      onPress={auth.handleSignIn}
    />
  );
};

export default CustomNext;
