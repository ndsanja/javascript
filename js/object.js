//Objec lieral
const Mahasiswa1 = {
    nama : 'Nila Dwi Sanja',
    energi : 10,
    makan : function(porsi){
        this.energi = porsi += this.energi;
        return console.log(`Halo ${this.nama} Selamat Makan.`);
    },
    main : function(jam){
        this.energi = this.energi + jam;
        return console.log(`Halo ${this.nama} Selamat Bermain.`);
    },
    tidur : function(durasi){
        this.energi = this.energi + (durasi * 2);
        return console.log(`Halo ${this.nama} Selamat Tidur.`);
    }
}

//Function Declaration
const methodMahasiswa = {
    makan : function(porsi){
        this.energi = porsi += this.energi;
        return console.log(`Halo ${this.nama} Selamat Makan.`);
    },
    main : function(jam){
        this.energi = this.energi + jam;
        return console.log(`Halo ${this.nama} Selamat Bermain.`);
    },
    tidur : function(durasi){
        this.energi = this.energi + (durasi * 2);
        return console.log(`Halo ${this.nama} Selamat Tidur.`);
    }

}
function Mhs(nama, energi){
    let Mahasiswa = Object.create(methodMahasiswa);
    Mahasiswa.nama = nama;
    Mahasiswa.energi = energi;

    return Mahasiswa;
}

const Mahasiswa2 = Mhs('sanja', 10);

//Constructor

function dataMahasiswa(nama,energi){
    this.nama = nama;
    this.energi = energi;
}

dataMahasiswa.prototype.makan = function(porsi){
    this.energi = porsi += this.energi;
    return console.log(`Halo ${this.nama} Selamat Makan.`);
}
dataMahasiswa.prototype.main = function(jam){
    this.energi = this.energi + jam;
    return console.log(`Halo ${this.nama} Selamat Bermain.`);
}
dataMahasiswa.prototype.tidur = function(durasi){
    this.energi = this.energi + (durasi * 2);
    return console.log(`Halo ${this.nama} Selamat Tidur.`);
}

const Mahasiswa3 = new dataMahasiswa('sanja', 10);
Mahasiswa3;


//class
class Data {
    constructor(nama, energi){
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi){
        this.energi = porsi += this.energi;
        return console.log(`Halo ${this.nama} Selamat Makan.`);
    }
    main(jam){
        this.energi = this.energi + jam;
        return console.log(`Halo ${this.nama} Selamat Bermain.`);
    }

    tidur(durasi){
        this.energi = this.energi + (durasi * 2);
        return console.log(`Halo ${this.nama} Selamat Tidur.`);
    }
}

const Mahasiswa4 = new Data('sanja', 10);
Mahasiswa4;
