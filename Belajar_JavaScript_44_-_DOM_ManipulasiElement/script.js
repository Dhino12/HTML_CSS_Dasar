let chino = document.getElementById("chara");
chino.setAttribute("src","chino.jpg");

let gambarChino = chino.getAttribute("src");
console.log(gambarChino);

let nama = document.querySelector("#caption");
// Kita dapat memberikan nilai HTML pada konten elemen dengan menggunakan properti innerHTML
nama.innerHTML = '<b>Chino </b>' 
nama.innerHTML = '<b>Kafuu </b>' // Menimpa html sebelumny

// nilai apapun yang terdapat pada properti ini adalah merupakan sebuah teks
// nama.innerText = "Chino_Chan" 


// ============= Membuat dan Menambahkan Element Baru ================
let newElement = document.createElement('p');
newElement.innerHTML = 'Anda Menekan Tombol <span id="count">0 </span> kali'
document.body.appendChild(newElement); // menambahkan element baru diBrowser

// ============= Membuat dan Menambahkan Aksi/Event Element ================
let button = document.getElementsByClassName("button")[0];
button.addEventListener("click", function(event){
    document.querySelector("#count").innerText++;
})

