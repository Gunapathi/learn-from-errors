function Person(_name, _age) {
    this.name = _name;
    this.age = _age;

    this.getName = function () {
        console.log(`I'm ${this.name}`)
    }
}

Person.prototype.getAge = function () {
    console.log(`my age is ${this.age}`)
}

let Person1 = new Person('Guna', 25);

let Person2 = new Person('Gunapathi', 50)

console.log(Person1);
console.log(Person1.getName(), Person1.getAge());
console.log(Person2);