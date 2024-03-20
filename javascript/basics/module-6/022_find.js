// FIND
const trans = [100, -120, 134, 12, -20, -31];

const find = trans.find(function (n) { // returns the first matching element
    return n < 10;
})

console.log(find);

const findIndex = trans.findIndex(function (n) { // retrns the index of the first matching element
    return n < 10;
})

console.log(`index is -> ${findIndex}`);

// SOME
const some = trans.some(function (num) { // stops the iteration when match is found
    return num === 12;
})

console.log(some)

// EVERY
const every = trans.every(function (num) { // iterate for each element in the collection
    return num < 12;
})

console.log(every)