const userName = "Павло";
const greeting = `Hello, ${userName}`;
console.log(greeting);

const firstName = "John";
const lastName = "Dou";
const fullName = `${firstName} ${lastName}`;
console.log(fullName);

function multiply(a, b) {
  return a * b;
}
let result = multiply(10, 15);
console.log(result);

const multiplyNumb = (a, b) => a * b;

console.log(multiplyNumb(10, 15));

const calculate = (a, b, operator) => {
  if (operator === "+") {
    return a + b;
  } else if (operator === "-") {
    return a - b;
  } else if (operator === "*") {
    return a * b;
  } else if (operator === "/") {
    return a / b;
  } else {
    return "Unknown";
  }
};
console.log(calculate(10, 15, "*"));

const formatName = (name) => {
  const firstLetter = name.charAt(0).toUpperCase();
  const restOfName = name.slice(1).toLowerCase();
  return firstLetter + restOfName;
};
console.log(formatName("TOMaS"));

const isPalindrome = (word) => {
  const lowerCase = word.toLowerCase();
  const reverseWord = lowerCase.split("").reverse().join("");
  return lowerCase === reverseWord;
};
console.log(isPalindrome("car"));
console.log(isPalindrome("maam"));
console.log(isPalindrome("корок"));

const a = 10;
const b = 20;
console.log(a + b);

const name = "Іван";
const greetingUser = `Привіт, ${name}!`;
console.log(greetingUser);

const isAdult = (age) => {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
};
console.log(isAdult(12));
console.log(isAdult(25));

const checkNumb = (number) => {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
};
console.log(checkNumb(7));
console.log(checkNumb(10));

const compareNumb = (a, b) => {
  if (a == b) {
    return "рівні";
  } else if (a > b) {
    return "перше число більше";
  } else if (a < b) {
    return "друге число більше";
  } else {
    return "err";
  }
};
console.log(compareNumb(10, 2));

const checkNumbFunc = (number) => {
  if (number < 0) {
    return "Від'ємне";
  } else if (number >= 0) {
    return "Не від'ємне";
  } else {
    return error;
  }
};
console.log(checkNumbFunc(25));

const leapYear = (year) => {
  if (year % 400 === 0) {
    return true;
  } else if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  } else {
    return false;
  }
};
console.log(leapYear(2020));

const biggestNumb = (a, b, c) => {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
};
console.log(biggestNumb(11, 7, 4));

const checkParity = (numb) => {
  if (numb % 2 == 0) {
    return "Parity";
  } else {
    return "Odd";
  }
};
console.log(checkParity(3));

const numberMult = (number, mult) => {
  let result = 0;
  for (let i = 0; i < mult; i++) {
    result += number;
  }
  return result;
};
console.log(numberMult(2, 3));

const numberPower = (base, exponent) => {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
};
