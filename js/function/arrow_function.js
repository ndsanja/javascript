const jumlah = (a, b) => a + b;
console.log(jumlah(1,2));

const sapa = nama => `halooo ${nama}, selamat makan.`
console.log(sapa('sanja'));

console.log("hello");



const angka = [5,7, 8, 3, -1, 0, 35, 20, 36, 21, 78, 3, 20, 5, 9, 8, 6];

const buah = ['apel', 'mangga', 'durian', 'rambutan', 'salak', 'jeruk', 'pisang'];

const mahasiswa = ['sanja', 20, true, 'ekonomi', 3.25, '04659847']

const angkaBaru = angka.filter(a => a >= 5);
console.log(angkaBaru);
const newAngka = angka.map(a => a * 2);
console.log(newAngka);
const jumlahAngka = angka.reduce( (jmlh, a) => jmlh + a);
console.log(jumlahAngka);

const keliling = (p,l,t) => {
    return `keliling dari Panjang: ${p}, Lebar ${l}, Tinggi ${t}, adalah = ${p*l*t}`
}

const hasil= keliling(9,8,5);
console.log(hasil);