//Class

class Mhs {
    constructor(nama, nim, energi, ip){
        this.nama = nama;
        this.nim = nim;
        this.energi = energi;
        this.ip = ip;
    }

    makan(porsi){
        this.energi = porsi += this.energi;
        return `selamat makan ${this.nama}, semoga kenyang.`
    }
    
    main(waktu){
        this.energi = waktu += this.energi;
        return `selamat bermain ${this.nama}, semoga menyenangkan.`
    }
    
    tidur(jam){
        this.energi = jam += this.energi;
        return `selamat tidur ${this.nama}, semoga nyenyak!!`
    }
}

const sanja = new Mhs('sanja', 1234, 10, [2.2, 3.6, 4.0, 3.0]);
console.log(sanja.ip.forEach( e => console.log(e)));
console.log(sanja.makan(6));
console.log(sanja.energi);
console.log(sanja);