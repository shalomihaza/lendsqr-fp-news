export const L = (...args: any) => {
  __DEV__ && console.log(...args);
};

export const getLocalDateString = (date: number) => {
  return new Date(date).toLocaleDateString();
};
