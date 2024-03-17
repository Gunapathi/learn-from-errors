// ARRAY DESTRUCTRING
let arr = ['hi', 'I', , 'am', 'guna'];

let a = arr[0]
let b = arr[1]

let [c, d, e, f, g, h] = arr;

console.log(a, b)
console.log(c, d, e, f, g, h)

// OBJECT DESTRUCTRING
let myObj = {
    name: 'Guna',
    age: 26,
    gender: 'Male',
    address: {
        city: 'chennai',
        pincode: '000000'
    }
}

let { name: firstName, age, gender, address: { city: district, pincode } } = myObj
console.log(firstName, age, gender, district, pincode)