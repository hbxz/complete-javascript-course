// console.log('hello world')

var firstName = 'John';

/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/

// var mark_mass = 78; 
// var john_mass = 1.69; 
// var mark_height = 92;
// var john_height = 1.95;

// function bmi(mass, height) {
//     return mass / height^2;
// }
// var mark_bmi = bmi(mark_mass, mark_height)
// var john_bmi = bmi(john_mass, john_height)
// var mark_higher_than_john = mark_bmi > john_bmi
// console.log(`Is Mark's BMI higher than John's? ${mark_higher_than_john}`)

// console.log(`Fifteen is ${five + ten} and not ${2 * five + ten}.`);


/*****************************
* to-know @Boolean: Truthy and Falsy values and equality operators
*/
/*
// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

var height;

height = 23;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}

// Equality operators
if (height === '23') {
    console.log('The == operator does type coercion!');
}

*/



/*****************************
* Functions
*/
/*
function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);


function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.')
    }
    
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');
*/



/*****************************
* Function Statements and Expressions
*/
/*
// Function declaration
// function whatDoYouDo(job, firstName) {}

// Function expression
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives a cab in Lisbon.'
        case 'designer':
            return firstName + ' designs beautiful websites';
        default:
            return firstName + ' does something else';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));
*/


/*****************************
* Arrays
*/
/*
// Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[names.length + 1] = 'Mary'; 
console.log(names);     //  ["John", "Ben", "Jane", empty, "Mary"]

// // Different data types
var multiTypeArr = ['John', 'Smith', 1990, 'designer', false];

multiTypeArr.push('blue');
multiTypeArr.unshift('Mr.');
console.log(multiTypeArr);

multiTypeArr.pop();
multiTypeArr.pop();
multiTypeArr.shift();
console.log(multiTypeArr);

console.log(multiTypeArr.indexOf(23));

var isDesigner = multiTypeArr.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);

*/




/*****************************
* Objects and methods
*/
/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age = 2018 - this.birthYear;
    }
};

john.calcAge();
console.log(john);
john.nonExistingKey = 'value for nonExistingKey'

console.log(`john.nonExistingKey is ${john.nonExistingKey}`);
*/


// for loop
for (var i = 1; i <= 20; i += 2) {
    console.log(i);
}