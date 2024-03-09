var car = {
    model: 'RR',
    automatic: true,
    color: ['Red', 'green'],
    dealerAdd: {
        street: 'Greens road',
        city: {
            name: 'Chennai',
            pincode: '123456'
        }
    }
}

// dot notation
console.log(car.model)
console.log(car.color[0])

// squre notation
console.log(car['model'])
console.log(car['color'][0])

// add value to object
car.speed = 400;
console.log(car)

car.speed = 410;
console.log(car)