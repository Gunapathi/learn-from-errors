class Person {
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;

        // this.greet = function() {
        //     console.log(`Hi ${this.name} 1`)
        // }
    }

    greet() {
        console.log(`Hi ${this.name}`)
    }
}

let Person1 = new Person('Guna', 25);
Person1.greet()

console.log(Person1)