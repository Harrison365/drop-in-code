const mentor = {
  name: "John",
  age: 35,
  sex: "male",
};

for (let i in mentor) {
  console.log(i);
}

//HAS OWN PROPERTY

console.log(mentor.hasOwnProperty("religion"));
