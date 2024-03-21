class Person {
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;
    }

    welcome() {
        console.log(`Welcome ${this.name}`)
    }
}

class Teacher extends Person {
    constructor(_name, _age, _strength) {
        super(_name, _age);
        this.strength = _strength;
    }

    test() {
        super.welcome()
    }
}

class Student extends Person {
    constructor(_name, _age, _cgpa) {
        super(_name, _age);
        this.cgpa = _cgpa;
    }
}

let Person1 = new Person('Guna', 25)
let Teacher1 = new Teacher('Guna Test', 27, 55)

console.log(Teacher1)