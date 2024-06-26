/* Your JS goes in this file */
function isAdult(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

const isAdultResult = isAdult(25);
console.log('is adult example', isAdultResult);

function didStudentPass(score) {
  if (score >= 70) {
    return true;
  } else {
    return false;
  }
}

const didStudentPassResult = didStudentPass(99);
console.log('did student pass result example', didStudentPassResult);

function gradeCalculator(score) {
  if (score < 60) {
    return 'f';
  } else if (score < 70) {
    return 'd';
  } else if (score < 80) {
    return 'c';
  } else if (score < 90) {
    return 'b';
  } else if (score < 100) {
    return 'a';
  } else if (score > 100) {
    return 'A++';
  }
}

const gradeCalculatorResult = gradeCalculator(95);
console.log('grade calculator example', gradeCalculatorResult);

function seasonMessenger(season) {
  if (season === 'summer') {
    return 'it is hot today';
  } else if (season === 'spring') {
    return 'the flowers are blooming';
  } else if (season === 'autumn') {
    return 'the leaves are changing colors';
  } else if (season === 'winter') {
    return 'it is cold today';
  } else {
    return ' please enter a valid season';
  }
}

const seasonMessengerResult = seasonMessenger('winter');
console.log('season messenger example', seasonMessengerResult);

function dayDetector(dayOfTheWeek) {
  if (dayOfTheWeek === 'saturday' || dayOfTheWeek === 'sunday') {
    return 'have a good weekend';
  } else {
    return 'It is a weekday!';
  }
}

const dayDetectorResult = dayDetector('saturday');
console.log('day detector example', dayDetectorResult);
