// for (key in entity) {} is used to loop through Object, array values
// and use square notation to access values instead of dot notation

// OBJECT FOMAT
var car = {
    model: 'RR',
    automatic: true,
    color: 'Red'
}

// for (var spec in car) {
//     console.log(spec + '-' + car[spec])
// }


// ARRAY FOMAT

var cars = ['BMW', 'Audi', 'Jaguar', 'Benz']

for (var car in cars) {
    console.log(cars[car])
}