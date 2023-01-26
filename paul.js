function makeGuestList(person) {
  const personNew = {
    firstName: person.name.split(" ")[0],
    lastName: person.name.split(" ")[1],
    age: person.age,
  };

  return personNew;
}

makeGuestList({ name: "Hannah Fry", age: 46 });
