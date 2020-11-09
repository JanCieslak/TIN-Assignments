'use strict';

function Student(firstName, lastName, id, grades) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.id = id;
  this.grades = grades;

  this.print = function() {
    const avg = this.grades.reduce((acc, val) => acc + val, 0) / this.grades.length;
    console.log(`${this.firstName} ${this.lastName} ${avg}`);
  }
}

// Student.prototype.print = function() {
//   const avg = this.grades.reduce((acc, val) => acc + val, 0) / this.grades.length;
//   console.log(`${this.firstName} ${this.lastName} ${avg}`);
// }

const s1 = new Student('John', 'Wick', 0, [1, 2, 3, 4, 5, 6]);
const s2 = new Student('Gary', 'Brick', 1, [2, 2, 6, 6, 6, 6, 6]);

s1.print();
s2.print();