const a = [1, 2, 3, 4, 5];

const result = a.map(function (num) {
    return num * num
})

console.log(result)

const trans = [100, 120, 134, 12, -20, -31];

const dollar = 80;

const inRupees = trans.map(function (num) {
    return (num / dollar).toFixed(0);
})

console.log(inRupees);