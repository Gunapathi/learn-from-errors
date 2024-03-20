// square num is even or not

// IMPERATIVE
const a = 4;

const squareNum = a * a;
let isEven;

if (squareNum % 2 == 0) {
    isEven = true;
} else {
    isEven = false;
}

console.log(isEven);

// DECLARATIVE
const checkForSqure = (x) => ((x * x) % 2 == 0 ? true : false);

console.log(checkForSqure(a))