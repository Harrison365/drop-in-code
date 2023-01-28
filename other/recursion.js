const nest = [4, 2, 3, [4, 1]]; //14

function sumNest(arr) {
  let count = 0;

  arr.forEach((i) => {
    if (Array.isArray(i)) {
      count += sumNest(i);
    } else {
      count += i;
    }
  });

  return count;
}

console.log(sumNest(nest));

//could use for loop
