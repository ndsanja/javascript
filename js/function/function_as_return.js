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
