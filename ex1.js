let findAvg = (arr) => {
  let avg = 0;
  arr.forEach((value) => {
    avg += (value / arr.length);
  });
  return avg;
};
console.log(findAvg([1, 2, 5, 7, 9]));