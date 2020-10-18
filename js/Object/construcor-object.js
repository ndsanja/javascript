// constructor function
function Mhs(nama,nim,energi,ip){
    this.nama = nama;
    this.energi = energi;
    this.nim = nim;
    this.ip = ip;
}

Mhs.prototype.makan = function(porsi){
    this.energi = porsi += this.energi;
    return `selamat makan ${this.nama}, semoga kenyang.`
}

Mhs.prototype.main = function(waktu){
    this.energi = waktu += this.energi;
    return `selamat bermain ${this.nama}, semoga menyenangkan.`
}

Mhs.prototype.tidur = function(jam){
    this.energi = jam += this.energi;
    return `selamat tidur ${this.nama}, semoga nyenyak!!`
}

const sanja = new Mhs('sanja', 1234, 10, [2.2, 3.6, 4.0, 3.0]);
console.log(sanja.ip.forEach( e => console.log(e)));
console.log(sanja.makan(6));
console.log(sanja.energi);