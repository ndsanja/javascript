//function Declaration
const method = {
    makan : function(porsi){
        this.energi = porsi += this.energi;
        return `selamat makan ${this.nama}, semoga kenyang.`
    },
    main : function(waktu){
        this.energi = waktu += this.energi;
        return `selamat bermain ${this.nama}, semoga menyenangkan.`
    },
    tidur : function(jam){
        this.energi = jam += this.energi;
        return `selamat tidur ${this.nama}, semoga nyenyak!!`
    }

}

function Mhs(nama,nim,energi,ip){
    const Mahasiswa = Object.create(method);
    Mahasiswa.nama = nama;
    Mahasiswa.nim = nim;
    Mahasiswa.energi = energi;
    Mahasiswa.ip = ip;
    return Mahasiswa; 
}

const sanja = new Mhs('Nila dwi sanja', 234, 10, [2.2, 4.5, 4.0, 3.0])

console.log(sanja.ip.forEach( e => console.log(e)));
console.log(sanja.makan(6));
console.log(sanja.energi);
console.log(sanja);