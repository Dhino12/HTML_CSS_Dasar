// Array di JavaScript merupakan tipe data yang dapat mengelompokkan 
    // lebih dari satu nilai dari tipe data lain dengan menempatkannya pada satu variabel
let myArray = ["Cokelat" , 4243, 4.2, true, "Haii",["Hai","Semua",10]];
console.log("===== Array =====");
console.log(myArray);
console.log(myArray[4]); 
console.log("Panjang Array = " + myArray.length); 
console.log(myArray[5][1]); 

console.log("===== Object =====");
let Object = {key1: "Megu" , key2:"Chino" ,key3:"Maya"};
let user = {
    name:{
        first: "Hoto",
        last:"Cocoa"
    },
    age: 15, 
    hobby:"Nuang Kopi",
    teman: ["rize","chiya","syaro","chino","maya","megu"]
};

console.log(Object.key2);
console.log(user.lastName);
console.log(user.teman[1]);

console.log("My First Name is: \"" + user.name.first + "\" and last Name is \"" + user.name.last + "\"");