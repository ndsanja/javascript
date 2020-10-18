
const angka = [5,7, 8, 3, -1, 0, 35, 20, 36, 21, 78, 3, 20, 5, 9, 8, 6];

const buah = ['apel', 'mangga', 'durian', 'rambutan', 'salak', 'jeruk', 'pisang'];

const mahasiswa = ['number','sanja', 20, true, 'ekonomi', 3.25, '04659847']

const gabung = [...angka,...buah,...mahasiswa];
console.log(gabung);

const gabung2 = [...gabung];
gabung2.unshift('adapaya')
console.log(gabung2);
console.log('==========');


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

 for(m in Mhs){console.log(`${m} : ${Mhs[m]}`)}
 for(m in Mhs){console.log(m)}
 for(m in Mhs){console.log(Mhs[m])}
 console.log('==============');


const {nama,nim,energi:e,ip:[satu, dua,...value]} = Mhs;
console.log(nama);
console.log(nim);
console.log(e);
console.log(dua);
console.log(satu);
console.log(value);
console.log('================');

const [angka1,angka2,,angka3,...angkaSisa] = angka;//rest
console.log(angka1);
console.log(angka2);
console.log(angka3);
console.log(...angkaSisa); //spread
console.log('==============');

function saring(type,...value){
    return value.filter( e => typeof(e) === type).join(' - ')
}

console.log(saring('string','sanja', 20, true, 'ekonomi', 3.25, '04659847'))
console.log('==============');

function jumlah(...value){
    let number = 0
    for (a of value){
        number += a
    }
    return number
}

console.log(jumlah(5,7, 8, 3, -1, 0, 35, 20, 36, 21, 78, 3, 20, 5, 9, 8, 6));

function jumlah2(...value){
    return value.reduce((jmlh,a) => jmlh + a)
}

console.log(jumlah2(5,7, 8, 3, -1, 0, 35, 20, 36, 21, 78, 3, 20, 5, 9, 8, 6));

console.log('====================');
