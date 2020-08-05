import * as Updates from 'expo-updates';

export const updateApp = async (): Promise<void> => {
  const { isAvailable } = await Updates.checkForUpdateAsync();

  if (isAvailable) {
    await Updates.fetchUpdateAsync();
    await Updates.reloadAsync();
  }
};
