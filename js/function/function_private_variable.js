const count = function(){
    let counter = 0;
    return function(){
        return ++counter;
    }
}
const jumlah = count();

console.log(jumlah())
console.log(jumlah())
console.log(jumlah())
console.log(jumlah())
console.log(jumlah())
console.log(jumlah())
console.log(jumlah())