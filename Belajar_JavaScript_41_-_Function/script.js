/* Native function merupakan fungsi yang 
sudah terdapat pada JavaScript atau Browser sehingga kita 
tidak perlu membuat hanya tinggal menggunakan saja */
// contoh : alert(), confirm(), Date(), parseInt(), prompt()


/* Custom function merupakan fungsi yang kita buat sendiri,
    tentu custom function dibuat menyesuaikan kebutuhan kita. 
    Untuk membuat sebuah custom function, kita perlu menuliskan 
    keyword function dilanjutkan dengan menuliskan seluruh struktur fungsinya */

    //Function tanpa argument
function sapa(){
    console.log("Selamat Pagi");
}

//Function dengan argument
function greeting(name, language){
    if(language === "english"){
        console.log("Good Morning" + name);
    }else if(language === "japanese"){
        console.log("おはようございます" + name);
    }else{
        console.log("Selamat Pagi" + name);
    }
}

//Function dengan Kembalian/return
function rekursif(n){
    if(n <= 1) return n;

    console.log("fib: "+n);

    return rekursif(n - 1) + rekursif(n - 2);
}

sapa(); // Menjalankan Function
greeting("Chino","japanese"); // Menjalankan Function
console.log("Fibonnaci: " + rekursif(4));