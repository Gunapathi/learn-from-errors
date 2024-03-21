function Person(_name, _age) {
    let name = _name;
    this.age = _age;

    // encapulates the name property from accessing outside the value
    this.getName = function () {
        return name;
    }
}

let Person1 = new Person('Guna', 25)

console.log(Person1.getName(), Person1.age)

Person1.name = 'Gunapathi';
Person1.age = 500;

console.log(Person1.getName(), Person1.age)