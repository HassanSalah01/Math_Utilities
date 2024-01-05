const randomNumberInt = (min = 0, max = 2) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const randomNumberFloat = (min = 0, max = 2) => {
  return Math.random() * (max - min + 1) + min;
};

const randomChar = (type = "u") => {
  let char = String.fromCharCode(
    Math.floor(Math.random() * (90 - 65 + 1)) + 65
  );
  if (type === "u") {
    return char;
  } else if ("i") {
    return char.toLowerCase();
  }
};
