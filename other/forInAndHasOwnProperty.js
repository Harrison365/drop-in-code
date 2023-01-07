const mentor = {
  name: "John",
  age: 35,
  sex: "male",
};

// for (let property in mentor) {
//   console.log(property + " = " + mentor[property]);
// }

for (let i in mentor) {
  if (typeof mentor[property] === "number") {
    console.log(property + " << look at this key");
  }
}

//HAS OWN PROPERTY

console.log(mentor.hasOwnProperty("religion"));
