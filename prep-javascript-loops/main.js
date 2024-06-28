// create your loops here.
function whileLoop1() {
  let newArray = [];
  let index = 0;
  while (index < 10) {
    newArray.push(index);
    index++;
  }
  return newArray;
}
const whileLoop1Result = whileLoop1();

console.log('while loop 1 result', whileLoop1Result);

function whileLoop2() {
  let newArray2 = [];
  let index = 0;
  while (index < 20) {
    newArray2.push(index);
    index += 2;
  }
  return newArray2;
}
const whileLoop2Result = whileLoop2();

console.log('result of while loop 2', whileLoop2());

function forLoop1() {
  let newArray3 = [];
  for (let index = 0; index < 10; index++) {
    newArray3.push(index);
  }
  return newArray3;
}

const forLoop1Result = forLoop1();

console.log('result of for loop 1', forLoop1Result);

function forLoop2() {
  for (index = 100; index >= 0; index--) {
    console.log('time to explosion', index);
  }
}

const forLoop2Result = forLoop2();

console.log('value of for loop 2 result', forLoop2Result);

const person = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};

function forInLoop1(person) {
  let newArray4 = [];
  for (let property in person) {
    newArray4.push(property);
  }
  return newArray4;
}

const forInLoop1Result = forInLoop1(person);
console.log('for in loop 1 resuslt', forInLoop1Result);

function forInLoop2(object) {
  let newArray5 = [];
  for (const property in object) {
    newArray5.push(object[property]);
  }
  return newArray5;
}

const forInLoop2Result = forInLoop2(person);
console.log('for in loop 2 result', forInLoop2Result);
