const trans = [100, -120, 134, 12, -20, -31];

const result = trans.reduce(function (acc, num) {
    let updatedSum = acc + num;

    return updatedSum;
}, 0)

console.log(result)