let obj1 = { cake: 2, iceCream: 7 };
let obj2 = { plates: 2, cups: 1, forks: 1, partyHats: 4 };

// console.log(obj1.iceCream);

let count = 0;

for (let i in obj1) {
  count += obj1[i];
}

console.log(count);
// function orderSupplies(obj, num) {

// }

// console.log(orderSupplies(obj1, 2));
// console.log(orderSupplies(obj2, 20));
