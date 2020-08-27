// for (inisialisasi variabel; komparasi; increment/decrement/batasLoop) {
//     // do something
// }


for (let i = 0; i < 10; i++) {
    console.log(i);
}

let myArray = ["Chino","Cocoa","Rize"];
for(let i = 0 ; i < myArray.length ; i++){
    console.log("for: " + myArray[i]);
}

//=========== Cara Lain for of / untuk array dan perulangan object ============
for (const iterator of myArray) {
    console.log("for of: " + iterator);
}

//=========== Cara Lain forEach / untuk array dan perulangan object ============
myArray.forEach(iterator => {
    console.log("forEach: " + iterator);
});