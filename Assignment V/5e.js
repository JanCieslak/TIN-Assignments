'use strict';

class Student {
  set fullname(value) {
    const fullname = value.split(' ');
    this.firstName = fullname[0];
    this.lastName = fullname[1];
  }

  get fullname() { 
    return this.firstName + ' ' + this.lastName;
  }

  get avgGrade() { 
    return this.grades.reduce((acc, val) => acc + val, 0) / this.grades.length;
  }
  
  constructor(firstName, lastName, id, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.grades = grades;
  }

  print() {
    const avg = this.grades.reduce((acc, val) => acc + val, 0) / this.grades.length;
    console.log(`${this.firstName} ${this.lastName} ${avg}`);
  }
}

const s1 = new Student('John', 'Wick', 0, [1, 2, 3, 4, 5, 6]);
const s2 = new Student('Gary', 'Brick', 1, [2, 2, 6, 6, 6, 6, 6]);

console.log(s1.fullname);
s1.fullname = 'Tom Jerry';
console.log(s1.fullname);

console.log(s1.avgGrade);