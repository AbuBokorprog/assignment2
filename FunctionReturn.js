//snippet 1
const add = (a, b) => {
  return a + b;
};
const result1 = add(3, 4);
// Question 1: The value of the result is 7.

//snippet 2
const greet = (name) => {
  return { name };
};
const message = greet("Alice");
// Question 2: The value of the message is { name: 'Alice' }.

//snippet 3
const calculateArea = (radius) => {
  const PI = 3.14159;
  const area = PI * radius * radius;
  return area;
};
const area = calculateArea(5);
// Question 3: the value of area is 78.53975;

//snippet 4
const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
};
const evenNumber = isEven(8);
// Question 5: The value of evenNumber is true;

//snippet 6
const sayHello = () => {
  return "Hello";
};
const hello = sayHello();
// Question 6: The value of hello is Hello;

//snippet 7;
const calculateSquare = (num) => num * num;
const squaredNumber = calculateSquare(4);
// Question 7: The value of squaredNumber is 16;

//snippet 8;
const divide = (a, b) => {
  if (b === 0) {
    return "Error: Division by zero";
  }
  return a / b;
};
const result3 = divide(10, 2);
const result4 = divide(8, 0);
// Question 8: The value of result3 and result4 are 5, Error: Division by zero;
