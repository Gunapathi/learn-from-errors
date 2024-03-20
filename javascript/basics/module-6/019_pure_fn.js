// IMPURE FUNCTIONS
var a = 2;

function add(x) {
    console.log(x + a) // data will be updated based on external factors
    a++;
}

add(2)
add(2)
add(2)

function addPure(x, a) {
    console.log(x + a) // this is not the function work, it's not designed to console log - SIDE EFFECTS
}

addPure(2, 2)
addPure(2, 2)
addPure(2, 2)


function addPureFn(x, a) {
    return x + a;
}

const additionValue = addPureFn(2, 2)
console.log(additionValue)