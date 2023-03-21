function greetGuests(name) {
  let arr = name.split("");
  arr[0] = arr[0].toUpperCase();
  name = arr.join("");
  return name;
}

function greetGuests2(name) {
  let newName = name[0].toUpperCase() + name.slice(1);
  return newName;
}

console.log(greetGuests("jacob"));
console.log(greetGuests2("jacob"));
