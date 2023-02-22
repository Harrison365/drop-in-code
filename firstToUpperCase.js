function greetGuests(name) {
  let arr = name.split("");
  arr[0] = arr[0].toUpperCase();
  name = arr.join("");
  return "hello " + name;
}

console.log(greetGuests("babatunde"));
