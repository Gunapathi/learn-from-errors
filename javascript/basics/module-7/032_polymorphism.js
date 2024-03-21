class Animal {
    sound() {
        console.log('Animals make different sound')
    }
}

class Dog {
    sound() {
        console.log('Dog barks')
    }
}

class Cat {
    sound() {
        console.log('Cat mews')
    }
}

const Animal1 = new Animal();
const Cat1 = new Cat();
const Dog1 = new Dog();

Cat1.sound()
Dog1.sound()
Animal1.sound()