const fs = require('fs');

console.log('First Line - async start')

// ASYNC FUNCTION
fs.readFile('./fs.txt', callBack);
function callBack(err, data) {
    if (err)
        console.log('Error' + err);

    console.log('data ->' + data);

    fs.readFile('./fs1.txt', callBack1); // run after the first call
}

function callBack1(err, data) {
    if (err)
        console.log('Error' + err);

    console.log('data ->' + data);

    fs.readFile('./fs2.txt', callBack2); // run after the second call
}

function callBack2(err, data) {
    if (err)
        console.log('Error' + err);

    console.log('data ->' + data);
}

console.log('Last Line - async end')