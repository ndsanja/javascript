//closure
// sebuah function yang menggunakan yang mengambil nilai dari lexical scopenya/ dari dimana lingkungan function itu dibuat

function sapa(){
        const nama = 'sanja'
    function orang(){
        return `Halooo ${nama}, Selamat malam.`
    }

    return orang()
}
console.log(sapa());

const sapa2 = function(waktu){
    return function(nama){
        return `haloo ${nama}, selamat ${waktu}`
    }
}

const malam = sapa2('malam');
console.log(malam('sanja'));

const sapa3 = function(waktu){
    function orang(nama){
        return `haloo ${nama}, selamat ${waktu}`
    }

    return orang;
}

const siang = sapa3('siang');
console.log(siang('sanja'));

