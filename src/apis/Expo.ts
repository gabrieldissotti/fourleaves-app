import * as Updates from 'expo-updates';
import { isWebPlatform } from '../constants';

class Expo {
  updateApp = async (): Promise<void> => {
    if (isWebPlatform) {
      console.log('Async Update is disabled because is running on web');
      return;
    }

    const { isAvailable } = await Updates.checkForUpdateAsync();

    if (isAvailable) {
      await Updates.fetchUpdateAsync();
      await Updates.reloadAsync();
    }
  };
}

export default new Expo();
