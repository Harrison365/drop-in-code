function toCamelCase(str) {
  const words = str.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].toLowerCase();
    if (i > 0) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
  }

  return words.join("");
}

console.log(toCamelCase("This IS a TEST"));
console.log("hello".slice(1));
