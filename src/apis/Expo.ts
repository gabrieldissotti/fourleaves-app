import * as Updates from 'expo-updates';

class Expo {
  updateApp = async (): Promise<void> => {
    const { isAvailable } = await Updates.checkForUpdateAsync();

    if (isAvailable) {
      await Updates.fetchUpdateAsync();
      await Updates.reloadAsync();
    }
  };
}

export default new Expo();
