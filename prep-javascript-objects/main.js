const person = {
  firstName: 'Bryant',
  lastName: 'Mendoza',
  hobby: 'workingOut',
};
console.log('values of person', person);
const fullName = person.firstName + ' ' + person.lastName;
console.log('the persons full name is', fullName);
person.job = 'cook';
console.log('persons job', person.job);
person.previousJob = 'construction';
console.log('persons previous job', person.previousJob);
console.log('value of person', person);
