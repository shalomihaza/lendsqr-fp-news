import AsyncStorage from '@react-native-async-storage/async-storage';

import dayjs from 'dayjs';
import {L} from 'utils/helpers';

// const expiryInMinutes = 60;
export const storageKeys = {
  NEWS_ARTICLES: 'NEWS_ARTICLES',
};

export const isExpired = (
  timestamp: dayjs.ConfigType,
  expiryInMinutes: number,
) => {
  const now = dayjs();
  const storedTime = dayjs(timestamp);
  return now.diff(storedTime, 'minute') > expiryInMinutes;
};

const storeItem = async (key: string, value: any) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    };
    await AsyncStorage.setItem(key, JSON.stringify(item));
  } catch (error) {
    L('setItem catch', error);
  }
};

const retrieveItem = async (key: string) => {
  try {
    const jsonObj = await AsyncStorage.getItem(key);
    if (!jsonObj) return null;

    const item = JSON.parse(jsonObj);

    if (!item) return null;

    if (isExpired(item.timestamp, 60)) {
      // Command Query Separation (CQS)
      await AsyncStorage.removeItem(key);
      return null;
    }

    return item.value;
  } catch (error) {
    L('getItem catch', error);
    return null;
  }
};

const deleteItem = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (error) {
    L('removeItem catch', error);

    return false;
  }
};

const clearStorage = async () => {
  AsyncStorage.clear();
};

const storage = {
  setItem: storeItem,
  getItem: retrieveItem,
  removeItem: deleteItem,
  clearStorage,
};

export default storage;
