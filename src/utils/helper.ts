export default {
  getHash: <T>(
    _hash: string,
    key: string,
    defaultValue: T,
  ): typeof defaultValue | string => {
    const response =
      _hash
        .substring(1)
        .split('&')
        .find((word) => word.startsWith(key))
        ?.split('=')[1] || defaultValue;

    return response;
  },
};
