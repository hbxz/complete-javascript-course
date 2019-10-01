/////////////////////////////
// // 0 Function constructor 
// var Person = function(name, yourOfBirth, job) {
//     this.name = name;
//     this.yourOfBirth = yourOfBirth;
//     this.job = job;
// }

// Person.prototype.calculateAge = function() {
//     return 2019-this.yourOfBirth;
// }

// Person.prototype.lastName = "Smith";

// var john = new Person('Jane', 1992, 'designer');
// var mark1 = new Person('Mark', 1988, 'teacher');
// var mark2 = new Person('Mark', 1988, 'teacher');
// console.log(mark2 == mark1, '\t mark2 == mark1');    
// console.log(mark2 === mark1, "\t mark2 === mark1");  
// console.log(mark1.__proto__, "\t mark1.__proto__");
// console.log(mark1.__proto__ === Person.prototype, "\t mark1.__proto__ === Person.prototype");


/////////////////////////////
// Lecture: Function constructor
var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';
