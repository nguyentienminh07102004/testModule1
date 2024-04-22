let findAvg = (arr) => {
  return arr.reduce((total, value) => {
    return total + (value / arr.length);
  }, 0);
};