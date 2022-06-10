let isNumberPositive = (n) => {
  // Zero is probably positive, right?
  if (n >= 0) {
    return true;
  } else {
    return false;
  }
};

let convertDaysToAge = (n) => {
  return n / 365;
};

let getLargestNumber = (input) => {
  let largest = input[0];
  // For loop starts at 1 since we already set [0] as the largest, we don't need to check it again.
  for (let i = 1; i < input.length; i++) {
    if (input[i] > largest) {
      largest = input[i];
    }
  }
  return largest;
};

let getLastName = (input) => {
  return input[input.length - 1];
};

let allNumbersPositive = (input) => {
  let allPositive = true;
  for (let i = 0; i < input.length; i++) {
    if (input[i] < 0) {
      allPositive = false;
    }
  }
  return allPositive;
};

module.exports = {
  isNumberPositive,
  convertDaysToAge,
  getLargestNumber,
  getLastName,
  allNumbersPositive,
};
