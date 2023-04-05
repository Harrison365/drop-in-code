const people = [
  { numberOfAnimals: 4, name: "Harrison", "favourite animal": "Dog" },
  { numberOfAnimals: 4, name: "Kev", "favourite animal": "Lion" },
  { numberOfAnimals: 4, name: "Emily", "favourite animal": "Dolphin" },
  { numberOfAnimals: 4, name: "Paul", "favourite animal": "Dolphin" },
  { numberOfAnimals: 4, name: "Kev Junior", "favourite animal": "Sharks" },
];

//Does anyone like Dolphins? Write a function which returns an array of the names of those people who like dolphins.

function whoLikesDolphins(array) {
  const dolphinLovers = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]["favourite animal"] === "Sharks") {
      dolphinLovers.push(array[i].name);
    }
  }
  return dolphinLovers;
}

console.log(whoLikesDolphins(people));
