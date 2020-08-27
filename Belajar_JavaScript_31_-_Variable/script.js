
// inisalisasi dengan var dapat diubah
var firstName = "Chino";
firstName = "cocoa";
console.log(firstName);


// menggunakan var terdapat beberapa hal yang kontroversial, salah satunya hoisting.
    // artinya “Mengangkat” variabel yang dideklarasikan menggunakan 
    // var ini dapat diinisialisasi terlebih dahulu sebelum dideklarasikan,
x = 100;
var x;
console.log(x);

// Masalah ini sudah terselesaikan jika kita menggunakan let dalam mendeklarasikan variabel.
y = 100;
let y = 50;
console.log(y);

// inisalisasi dengan const tidak dapat diubah
const z = 500;
console.log(z);

z = 100; // Error karena const tidak dapat diubah / constant
console.log(z);
// Kemudian const digunakan untuk mendeklarasikan sebuah variabel 
    // yang sifatnya immutable atau tidak perlu diinisialisasi kembali