let a = 10; // can be updated
const b = 11; // cannot be updated
var c = 12;

console.log(a);
console.log(b);
console.log(c);

a = 11;
console.log(a);

var c = 13; // var memory is updated
if (c === 13) {
    var d = 1; // not scoped register access
}
console.log(d); // memory inside if condition is accessed outside of scope

function test() {
    var e = 0; // function scope variables cannot be updated
}
test()
console.log(e);

b = 12; // const keyword cannot be updated
console.log(b);