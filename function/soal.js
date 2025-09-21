function hitungTahunLahir(tahunLahir) {

    let tahunSekarang = 2025
    let umur = tahunSekarang - tahunLahir;
    console.log(umur + ' Tahun')
}

hitungTahunLahir(2012);

function cekUmur(umur) {
    if (umur <= -1) {
        return "Umur tidak valid"
    } else if (umur <= 12) {
        return "Anak - Anak";
    } else if (umur <= 17) {
        return "Remaja";
    } else if (umur <= 59) {
        return "Dewasa";
    } else {
        return "Lansia"
    }
}

console.log(cekUmur(-1));   
console.log(cekUmur(60));

class bankAccount {
    constructor(namaAkun) {
        this.namaAkun = namaAkun;
        this.saldo = 0;
    }

    setor(jumlah) {
        this.saldo += jumlah
        console.log('Anda Menambah sebanyak = ' + this.saldo)
    }

    tarik(jumlah) {
        this.saldo -= jumlah
        console.log('Anda menarik sebanyak = ' + this.saldo)
    }

    cekSaldo() {
        this.saldo
        console.log('Saldo Sekarang = ' + this.saldo) 
    }

    transfer(jumlah, tujuan) {
        this.saldo -= jumlah
        console.log(`anda telah Transfer sebanyak ${jumlah} ke ${tujuan}`)
    }
}

let namaAkun = new bankAccount ("Daren")

namaAkun.setor(50)
namaAkun.tarik(20)
namaAkun.cekSaldo()
namaAkun.transfer(20, "Amar")
namaAkun.cekSaldo()

function ambilDataUser (userId) {
    return new Promise((resolve, reject) => {
        if (userId <= 0) {
            reject("User ID tidak valid");
            return;
        }

        setTimeout(() => {
            const userData = { 
                id : userId,
                    nama : "User " + userId,
                    email : "email" + userId + "@gmail.com"
            };

            console.log("Data user berhasil diambil dari server")
            resolve(userData)
        }, 2000);
    })
}

async function login() {
    try {
        console.log("Sedang mengambil data....")
        let hasil = await ambilDataUser(-1);
        console.log("Nama kamu adalah : " + hasil.nama)
        console.log("Email kamu adalah : " + hasil.email)
        console.log("ID kamu adalah : " + hasil.id)
    } catch (error) {
        console.log('Error: ' + error);
    }
}

login()
