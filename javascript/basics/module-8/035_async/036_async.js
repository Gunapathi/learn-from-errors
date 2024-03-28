const fs = require('fs');

console.log('First Line - async start')

// ASYNC FUNCTION
fs.readFile('./fs.txt', callBack);
function callBack(err, data) {
    if (err)
        console.log('Error' + err);

    console.log('data ->' + data);
}

fs.readFile('./fs.txt', callBack1);
function callBack1(err, data) {
    if (err)
        console.log('Error' + err);

    console.log('data ->' + data);
}

console.log('Last Line - async end')