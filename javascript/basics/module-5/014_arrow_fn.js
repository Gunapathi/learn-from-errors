let a = 2;

const add = function () { // normal functions
    console.log(a + a);
}

const sub = (a, b) => { // arrow function
    console.log(a - b)
}

const mul = (a, b) => console.log(a * b)

add()
sub(3, 2)
mul(3, 2)