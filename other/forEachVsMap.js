const numbers = [1, 2, 3, 4, 5];
const numbers2 = [1, 2, 3, 4, 5];

// .map creates a new array (can't skip)
const squaredNumbers = numbers.map((number) => number * number);
console.log(squaredNumbers, "<<<map");

// .forEach can be to update the original array
numbers.forEach((number, index) => {
  numbers[index] = number * number;
});
console.log(numbers, "<<<forEach");

//filter only returns an element to a new array if a condition is met
const filteredNumbers = numbers2.filter((number) => {
  return number > 3;
});
console.log(filteredNumbers, "<<<filtered");
