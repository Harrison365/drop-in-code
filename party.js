let obj1 = { cake: 2, iceCream: 7 };
let obj2 = { plates: 2, cups: 1, forks: 1, partyHats: 4 };

function party(object, number) {
  let sum = 0;

  for (const key in object) {
    sum += object[key];
  }
  sum *= number;
  return sum;
}
console.log(party(obj2, 4));
