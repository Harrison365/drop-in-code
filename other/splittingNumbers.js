let num = 12345;

const split = num.toString().split("");
const numbers = split.map((n) => {
  return Number(n);
});
console.log(numbers);
