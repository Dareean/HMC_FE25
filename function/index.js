// function sapa() {
//     console.log("sapa");
// }

// sapa();
// export { sapa };


// function sapa(input) {
//     return input;
// }

// sapa('budi');

// function sapa(input) {
//   return input;
// }

// console.log(sapa('dareean'));
// console.log(sapa('makan'));
// console.log(sapa('pisang'));
// console.log(sapa('goreng'));
// console.log(sapa('enak'));
// console.log(sapa('sekali'));



// function cekNilai(nilai) {
//     if (nilai >= 75) {
//         return "Lulus";
//     } else {
//         return "Tidak Lulus";
//     }
// }

// console.log(cekNilai(80));
// console.log(cekNilai(75));


// const cekSehat = (a, b) => a + b;
// cekSehat(10, 20);
// console.log(cekSehat(10, 20));


// class hewan {
//     constructor(nama, jenis) {
//         this.nama = nama;
//         this.jenis = jenis;
//     }

//     bersuara() {
//         console.log(this.nama + " sedang bersuara");
//     }

//     info() {
//         return this.nama + ' adalah ' + this.jenis;
//     }
// }

// const kucing = new hewan("meong", "kucing");

// let hewan1 = new hewan("supri", "anjing");
// let hewan2 = new hewan("Yanto", "Kucing");

// hewan1.bersuara();
// hewan1.info();

// hewan2.bersuara();
// hewan2.info();

// let janji = new Promise(function(resolve, reject) {
//     let berhasil = false;

//     if (berhasil) {
//         resolve("Janji telah terpenuhi");
//     } else {
//         reject("Janji tidak terpenuhi");
//     }
// });

// janji
// .then((hasil) => console.log(hasil))
// .catch((error) => console.log(error));

// let janji = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("Data telah terpenuhi");
//     }, 3000);
// });

// janji.then((hasil) => console.log(hasil));

// function cekCuaca() {
//     return new Promise((resolve) => {
//         let cuacaBagus = true;

//         if (cuacaBagus) {
//             resolve("Cuaca hari ini cerah");
//         } else {
//             resolve("Cuaca hari ini hujan");
//         }
//     });
// }

// cekCuaca().then((hasil) => console.log(hasil));
// cekCuaca().catch((error) => console.log(error));

// function ambilData() { 
//     return new Promise((resolve) => {
//         console.log("Mengambil data...");
//         setTimeout(() => {
//             resolve("Data telah diambil");
//         }, 3000);
//     });
// }   

// ambilData().then((hasil) => console.log(hasil));

// function downloadData() {
//     return new Promise((resolve, reject) => {
//         let berhasil = true; 
//         setTimeout(() => {
//             if (berhasil) {
//                 resolve("Data berhasil di download");
//             } else {
//                 reject("Data gagal di download");
//             }
//         }, 3000);
//     });
// }


// downloadData()
//     .then((hasil) => {
//         console.log('Mulai mendownload data...');
//         console.log(hasil);
//     })
//     .catch((error) => {
//         console.log('Error: ' + error);
//     });

// async function cobaDownload() {
//     try {
//         console.log("Memproses data...");
//         let hasil = await downloadData(); 
//         console.log(hasil);
//     } catch (error) {
//         console.log('Error: ' + error);
//     }
// }

// cobaDownload();


// function langkah1() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Langkah 1 selesai");
//             resolve('hasil2');
//         }, 3000);
//     }  
//     );
// }
// function langkah2(data) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Langkah 2 selesai" + data);
//             resolve('hasil2');
//         }, 2000);
//     }  
//     );
// }   

// langkah1()
//     .then((hasil1) => langkah2(hasil1))
//     .then((hasil1) =>
//     console.log(`semua langkah selesai dengan` + hasil1)
// );

// function tugasA () {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Tugas A selesai");
//         }, 3000);
//     });
// }

// function tugasB () {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Tugas B selesai");
//         }, 2000);
//     });
// }

// function tugasC () {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Tugas C selesai");
//         }, 1000);
//     });
// }

// Promise.all([tugasA(), tugasB(), tugasC()])
//     .then((hasil) => {
//         console.log('Semua tugas selesai');
//         hasil.forEach((tugas) => console.log(tugas));
//     })
//     .catch((error) => console.log(error));


// function simulasiLogin(username, password) {
//     return new Promise((resolve, reject) => {
//         console.log("Memproses login...");
//         setTimeout(() => {
//             if (username === "admin" && password === "123") {
//                 resolve("Login berhasil");
//             } else {
//                 reject("Login gagal");
//             }
//         }, 2000);
//     });
// }

// async function login() {
//     try {
//         let hasil = await simulasiLogin("admin", "1235");
//         console.log(hasil);
//     } catch (error) {
//         console.log('Error: ' + error);
//     }
// }

// login();