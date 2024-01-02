const arr = [46, 69, 32, 60, 52, 41];

const mean = (arr) => {
  return (
    arr.reduce((sum, value) => {
      return (sum += value);
    }) / arr.length
  );
};

const meanDeviation = (arr, mean) => {
  return arr.map((x) => {
    return x - mean;
  });
};

const squareDiviation = (arr) => {
  return arr.map((x) => {
    return x * x;
  });
};

const diviationSum = (arr) => {
  return arr.reduce((sum, value) => {
    return (sum += value);
  });
};

const variance = (diviationSum, arr) => {
  return diviationSum / (arr.length - 1);
};
