// ///////////////////////////////////////
// // Lecture: Hoisting

// calculateAge(1965);

// function calculateAge(year) {
//     console.log(2016 - year);
// }


// // variables
// console.log(age);       // undefined
var a = 23;
var b = 23;
function foo() {
    console.log(a, b);
    var a = 11;
    console.log(a, b);
}
foo();                  // undefined
//                         // 65

// console.log(age);       // 23
                        




///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
*/
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}


// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword









