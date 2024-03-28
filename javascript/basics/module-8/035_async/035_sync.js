const fs = require('fs');

console.log('First Line')

let data = fs.readFileSync('./fs.txt', 'utf-8');
console.log(data);

console.log('Last Line')