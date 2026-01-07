function isFive(num) {
  return num === 5;
}

function isOdd(num) {
  if (typeof num !== "number") {
    throw new Error("Input must be a number");
  }

  return num % 2 !== 0;
}

function myRange(min, max, step = 1) {
  if (min > max) return [];

  const result = [];

  for (let i = min; i <= max; i += step) {
    result.push(i);
  }

  return result;
}

module.exports = {
  isFive,
  isOdd,
  myRange,
};
