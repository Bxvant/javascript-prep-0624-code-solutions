function addTwoNumbers(a, b) {
  return a + b;
}

var addTwoNumbersResult = addTwoNumbers(2, 2);
console.log('add two numbers exercise', addTwoNumbersResult);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

const minutues = convertHoursToMinutes(2);
console.log('convert hours to minutes exercise', minutues);

function getGreeting(name) {
  return 'hello' + ' ' + name + '!';
}

const greeting = getGreeting('Bryant');
console.log('greeting example', greeting);

function addAndMultiplyBy5(a, b) {
  return (a + b) * 5;
}

const multiplyBy5 = addAndMultiplyBy5(1, 2);
console.log('multiplyby5 example', multiplyBy5);

function multiplyAndDivideBy5(a, b) {
  return (a * b) / 5;
}

const multiplyDivideby5 = multiplyAndDivideBy5(5, 5);
console.log('multiplydivideby5 example', multiplyDivideby5);

function subtractTwoNumbers(a, b) {
  return a - b;
}

const subtract = subtractTwoNumbers(2, 2);
console.log('subtract two numbers example', subtract);

function getCircleCircumference(radius) {
  return 2 * 3.14 * radius;
}

const getCircumfrence = getCircleCircumference(5);
console.log('circle circumfrence example', getCircumfrence);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

const fullName = getFullName('bryant', 'mendoza');
console.log('full name example', fullName);

function cube(number) {
  return number * number * number;
}

const cubenumber = cube(10);
console.log('cube example', cubenumber);
