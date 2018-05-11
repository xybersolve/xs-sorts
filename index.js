const sortKeysR = (key) => {
  return (a, b) => {
    return b[key] > a[key] ? 1 : -1;
  };
};

const sortKeys = (key) => {
  return (a, b) => {
    return a[key] > b[key] ? 1 : -1;
  };
};

module.exports = {
  sortKeys,
  sortKeysR,
};
