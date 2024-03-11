console.log(a); // 1. undefined
greet() // 2. output -> Hello
add(2, 4); // 3. error

var a = 10;

function greet() {
    console.log('Hello')
}

// RECOMMENDED METHOD TO CREATE FUNCTION
var add = function (a, b) {
    console.log(a + b)
}

/*
    1. 'a' has a memory created with undefined since value initialization done after memory allocation
    2. functions can be calleed before or after invoking a function.
    3. functions expressions will show error, since memory allocation is updated as undefined and also undefined cannot
       be called as a function expression.
*/
