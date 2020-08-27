// Jika variabel didefinisikan di luar fungsi, maka variabel akan bersifat global
let a = 10;

// Jika kita variabel didefinisikan di dalam fungsi, maka variabel bersifat 
// lokal dan cakupannya hanya pada fungsi tersebut atau turunannya.

function parent(a) {
    // local variable, dapat diakses pada parent() dan child(), tetapi tidak dapat diakses diluar dari fungsi tersebut.
    let b = 'b';
    this.a = 51; // Memperbaharui karena habis sumber daya
    let d =  this.a; // ini akan mengakses variable global
    console.log("parent: " + b); 
    console.log("parent: " + d); 
    child();
    function child() { 
        const c = 'c';
        console.log("child: " + this.a); // ini akan memanggil variable global
        console.log("child: " + a); // ini akan memanggil variable diluar child
        console.log("child: " + c); // ini akan memanggil variable didalam child
    }
}

/* Perlu kita perhatikan bahwa, ketika kita lupa menuliskan keyword let,
    const atau var pada script ketika membuat sebuah variabel,
    maka variabel tersebut akan menjadi global. */

    function multiplay(num){
        // variable total disini akan mengakses variable global
        total = num * num;
        return total;
    }

    let total = 9;
    let number = multiplay(20);
    console.log(total);

    parent(30);

    const user = {
        name : "aa",
        origin : "Englan",
        enemy: "Lord"
    }
    let {enemy} = user;
    console.log(user.enemy);

    const sum = (a,b) => {
        a + b;
    }
    console.log(sum(4,4));

    class Person{

    }
    console.log(typeof(Person));