// index html refernce
console.log(this)

function obj() {
    console.log(this)
}

obj()

const myObj = {
    name: 'Guna',
    age: 23,

    myFn: function () {
        console.log(this)
        console.log(this.name)
    }
}

// myObj.myFn()

const myObj1 = {
    name: 'Guna',
    age: 23,

    myFn1: function () {
        function myFn2() {
            console.log(this)
        }

        myFn2()
    }
}

myObj1.myFn1()