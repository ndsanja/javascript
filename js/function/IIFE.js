
const count = (function(){
    let counter = 0;
    return function(){
        return ++counter;
    }
})()

console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count());