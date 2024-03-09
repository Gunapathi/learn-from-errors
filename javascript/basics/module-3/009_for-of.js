// Used to iterate over the iterable values
// Including: buit-in-string, array, array-like objects and also map and set

var cars = ['BMW', 'Audi', 'Jaguar', 'Benz']

// LOOP THROUGH VALUES
for (var car of cars) {
    console.log(car)
}

// LOOP THROUGH INDEX & VALUES
for (var [index, car] of cars.entries()) {
    console.log(index + '->' + car)
}

var str = 'Conditional';

for (var a of str) {
    console.log(a)
}