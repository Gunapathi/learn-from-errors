function createCar(_name, _color) {
    this.name = _name;
    this.color = _color;

    this.drive = function () {
        console.log(`Hi, I'm driving ${this.name} car, which is ${this.color} color`)
    }
}

let car1 = new createCar('BWM', 'white');
let car2 = new createCar('Audi', 'Red');

console.log(car1)
car1.drive()