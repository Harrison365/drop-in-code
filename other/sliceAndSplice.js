let str = "Hello World :)";
let arr = [0, 1, 2, 3, 4, 5];

// console.log(str.slice(1, 4));
// console.log(arr.slice(1, 4));
// console.log(str.slice(1));
// console.log(str.slice(-1));
// console.log(...arr.slice(1, 4));

let fruits = ["apple", "banana", "mango", "orange", "kiwi"];

//start, delete count, items to add...
let removed = fruits.splice(2, 3, "hello", "yo");
console.log(fruits);
console.log(removed);
