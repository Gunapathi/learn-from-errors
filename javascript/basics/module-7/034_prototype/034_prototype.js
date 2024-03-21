let object = {};

let person = {
    name: 'Guna',
    age: 25
}

// console.log(object);
console.log(person);
// console.log(person.hasOwnProperty('name'));

function Person(_name, _age) {
    this.name = _name;
    this.age = _age;
}

let Person1 = new Person('Guna', 25);
console.log(Person1);