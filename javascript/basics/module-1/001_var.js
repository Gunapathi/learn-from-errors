var a = 10;
var b = 11;

console.log(a + b);

a = 11; // value of a is update to 11 from 10
console.log(a + b);

// every value is considered as string and it will be printed in string format
var c = 'Sum'
console.log(c + '=' + a + b);

var d = 0.1;
console.log(c + '=' + a + b + d);

console.log(c, '=' + a + b + d);

// values are updated with float
var d = 0.1;
console.log(a + b + d);