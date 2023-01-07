//Spread Operator

function flattenOneLevel(arr) {
  const result = [];
  for (const x of arr) {
    if (Array.isArray(x)) {
      result.push(...x);
    } else {
      result.push(x);
    }
  }
  return result;
}

flattenOneLevel([1, 2, [3, 4, [5]]]);

let array = [1, 2, 3];
console.log(...array);
