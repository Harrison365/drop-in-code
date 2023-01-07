/*Write a function that takes an object, and a string of the name of a key on that object. It should return the value of that key.
If the key doesn’t exist on the object, it should return "no key called that" */

/*
Examples: retrieveKey({ name: "Sam" }, "name");
// returns 'Sam'
retrieveKey({ password: "Chips!" }, "password");
// returns 'Chips!'
retrieveKey({ name: "Sam" }, "age");
// returns undefined
*/

function retrieveKey(obj, string) {
  let answer = obj[string];
  if (answer === undefined) {
    return "no key called that";
  } else {
    return answer;
  }
}

console.log(retrieveKey({ name: "Sam" }, "aardvark"));
