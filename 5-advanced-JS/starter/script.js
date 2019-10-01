var john = {
    name: 'John',
    yourOfBirth: 1991,
    job: 'student'
};

var Person = function(name, yourOfBirth, job) {
    this.name = name;
    this.yourOfBirth = yourOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function() {
    return 2019-this.yourOfBirth;
}

Person.prototype.lastName = "Smith";

var jane = new Person('Jane', 1992, 'designer');
var mark1 = new Person('Mark', 1988, 'teacher');
var mark2 = new Person('Mark', 1988, 'teacher');

console.log(mark1.calculateAge());
console.log(mark1.lastName == "Smith");
console.log(mark2.lastName == mark1.lastName);
console.log(mark2.prototype); // undefined
console.log(Person.prototype);
console.log(mark2.prototype == mark1.prototype);
