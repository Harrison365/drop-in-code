email = "hello babatunde you owe me £5";
const emailArray = email.split(" ");
// console.log(emailArray);

for (let i = 0; i < emailArray.length; i++) {
  if (emailArray[i][0] === "£") {
    console.log(emailArray[i]);
  }
}
