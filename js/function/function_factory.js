
const sapa2 = function(waktu){
    return function(nama){
        return `haloo ${nama}, selamat ${waktu}`
    }
}

const malam = sapa2('malam');
console.log(malam('sanja'))