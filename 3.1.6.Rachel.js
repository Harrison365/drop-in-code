let obj1 = { cake: 2, iceCream: 7 };
let obj2 = { plates: 2, cups: 1, forks: 1, partyHats: 4 };

let count = 0;

for (let i in obj2) {
  count += obj2[i];
}

console.log(Object.values(obj2));

// console.log(count * 8);

// function orderSupplies(obj, num) {}

// console.log(orderSupplies(obj1, 2));
// console.log(orderSupplies(obj2, 20));
