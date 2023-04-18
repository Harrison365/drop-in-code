const dna = (string) => {
  const arr = string.toUpperCase().split("");
  const arr2 = arr.map((letter) => {
    if (letter === "A") {
      return "AT";
    }
    if (letter === "C") {
      return "CG";
    }
    if (letter === "T") {
      return "TA";
    }
    if (letter === "G") {
      return "GC";
    }
  });
  return arr2.filter((x) => {
    if (x) return x;
  });
};

console.log(dna("ATttCxxxXG"));
