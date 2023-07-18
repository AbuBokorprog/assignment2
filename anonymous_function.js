const sum = function (a, b) {
  return a + b;
};
const result = sum(3, 5);
console.log(result);

const arr = [1, 2, 3, 4, 5];
const square = function (arr) {
  const result = arr.map((a) => a * a);
  return result;
};
const output = square(arr);
console.log(output);

const numbers = [5, 8, 12];
const calculateSquare = function (numbers) {
  let square = [];
  const result = numbers.map((n) => n * n);
  square.push(result);
  return square;
};

const result2 = calculateSquare(numbers);
console.log(result2);
