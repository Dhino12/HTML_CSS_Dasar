// Document Object Model (DOM) memberikan kita jalan untuk mengakses dan memanipulasi konten pada dokumen
// DOM merupakan application programming interface (API) untuk HTML, XML atau SVG. 
// Untuk mengakses elemen melalui DOM, kita gunakan properti dari objek window yang dinamakan dengan document


// Mengembalikan elemen yang memiliki nilai id “display”.
// document.getElementById(“display”); 

// Mengembalikan banyak elemen (HTMLCollection) yang memiliki attribute name dengan nilai “button”.
// document.getElementsByName(“button”)

// Mengembalikan banyak elemen (HTMLCollection) yang memiliki attribute class dengan nilai “button”.
// document.getElementsByClassName(“button”)
let button = document.getElementsByClassName("button");
console.log(button);

// Mengembalikan banyak elemen (HTMLCollection) yang merupakan <div> elemen
// document.getElementsByTagname(“div”)
const p1 = document.getElementsByTagName('p');
p1[0].style.color = "#abab";
console.log(p1);
console.log("");

// Mengembalikan elemen pertama yang menerapkan class “button”.
// document.querySelector(“.button”);
const button2 = document.querySelector(".button");
button2.style.backgroundColor = "aqua";
button2.style.color = "blue";

// Mengembalikan banyak elemen (HTMLCollection) yang menerapkan class “button”.
// document.querySelectorAll(“.button”);
const p2 = document.querySelectorAll('p');
for(let item of p2){
    console.log(item);
}
p2[2].style.backgroundColor = "orange";


// Untuk menargetkan elemen berdasarkan attribute class, kita gunakan tanda “.”, 
    // sedangkan jika kita menargetkan dengan menggunakan id, gunakan tanda “#”.