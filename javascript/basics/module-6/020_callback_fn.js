function printFName(firstName, cb) { // high order - receives
    console.log(firstName);
    cb('S')
}

function printLName(lastName) { // callback - passed
    console.log(lastName);
}

printFName('Guna', printLName) // callback function

//

const isEven = (x) => {
    return x % 2 === 0;
}

const printResult = (isEvenFn, num) => {
    const result = isEvenFn(num);

    console.log(`The number ${num} is ${result ? 'even' : 'not even'}`);
}

printResult(isEven, 15)