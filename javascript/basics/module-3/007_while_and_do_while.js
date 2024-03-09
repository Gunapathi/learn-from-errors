// --> WHILE

// var count = 1;
// var squareRoot = [];

// while (count <= 5) {
//     squareRoot.push(count * count);
//     count += 1
// }

// --> DO-WHILE
// condition is false, but still do while run once

var count = 6;
var squareRoot = [];

do {
    squareRoot.push(count * count);
    count += 1
} while (count <= 5);

console.log(squareRoot);