// array index will start from 0 to n
var list = [1, 2, 3, 4, 5]

console.log(list)
console.log(list[0]) // 1
console.log(list[1]) // 2

// pop -> remove last element from array
list.pop()
console.log('arr after pop', list)

// push -> add element to last from array
list.push(100)
console.log('arr after push', list)

// shift -> remove first element from array
list.shift()
console.log('arr after shift', list)

// un-shift -> add first element from array
list.unshift(100)
console.log('arr after un-shift', list)

// length of array
console.log('arr length', list.length)