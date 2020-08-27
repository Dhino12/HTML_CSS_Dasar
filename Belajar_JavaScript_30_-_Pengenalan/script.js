alert("Hello World");
/* 
sebenarnya pada JavaScript kita dapat menghiraukan penulisan titik koma (;) 
pada akhir statement, tetapi dalam best practice nya
kita biasakan akhiri statement dengan titik koma (;). 
*/

alert("Selamat Datang"); // Menampilkan PopUp Alert
let lagi = true;
let nama;
while (lagi) {
    nama = prompt("Masukan Nama Anda: "); //meminta input user
    alert("Hallo " + " " + nama );
    lagi = confirm("Coba Lagi? "); // meminta input user berupa Y/N
}

alert(`Terima Kasih ${nama}`);