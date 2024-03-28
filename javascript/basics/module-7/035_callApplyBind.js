let person1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,

    printDetails: function () {
        console.log(`Hi I am ${this.firstName} ${this.lastName} and my age is ${this.age}`)
    }
}

let printName = function (city, job) {
    console.log(`Hi I am ${this.firstName} ${this.lastName}. I'm from ${city}. My Job is ${job}`)
}

let person2 = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 101,
}

// person1.printDetails()
// person2.printDetails()

// CALL
// person1.printDetails.call(person2)
// printName.call(person2, 'New York', 'Iron Man')

// APPLY
// printName.apply(person2, ['New York', 'Iron Man'])

// BIND
let myFun = printName.bind(person2, 'New York', 'Iron Man')
console.log(myFun);

myFun();
