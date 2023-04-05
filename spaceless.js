function spaceless(str) {
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      newStr += str[i];
    }
  }
  return newStr;
}

console.log(spaceless("Hel   lo Drop I  n!"));
console.log(spaceless("do esMy Fun ction Work ? "));
