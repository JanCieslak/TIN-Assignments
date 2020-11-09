'use strict';

class Person {
  set fullname(value) {
    const fullname = value.split(' ');
    this.firstName = fullname[0];
    this.lastName = fullname[1];
  }

  get fullname() { 
    return this.firstName + ' ' + this.lastName;
  }

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

class Student extends Person {
  get avgGrade() { 
    return this.grades.reduce((acc, val) => acc + val, 0) / this.grades.length;
  }
  
  constructor(firstName, lastName, id, grades) {
    super(firstName, lastName);
    this.id = id;
    this.grades = grades;
  }

  print() {
    const avg = this.grades.reduce((acc, val) => acc + val, 0) / this.grades.length;
    console.log(`${this.firstName} ${this.lastName} ${avg}`);
  }
}

const s1 = new Student('John', 'Wick', 0, [1, 2, 3, 4, 5, 6]);

console.log(s1.fullname);
s1.fullname = 'Tom Jerry';
console.log(s1.fullname);

s1.print();