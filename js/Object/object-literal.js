//Object literal

const Mhs = {
    nama: 'Nila Dwi Sanja',
    nim : 0983659185,
    energi: 10,
    ip  :[3.4, 4.0, 3.0, 2.0],
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

console.log(Mhs.tidur(9));
console.log(Mhs.energi);
console.log(Mhs.ip.forEach(e => console.log(e)));