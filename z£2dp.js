const pound = (num) => {
  return "£" + num.toFixed(2);
};

console.log(pound(3.456), typeof pound(3.456));
