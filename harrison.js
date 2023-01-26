function findThePounds(email) {
  const emailArray = email.split(" ");
  // console.log(emailArray);

  for (let i = 2; i < emailArray.length; i++) {
    if (emailArray[i].startsWith("£")) {
      return i;
    }
  }
}

//Count

// let count = 0;
// //for in or for loop

// let str = "hello";

// // console.log(str + " harrison, how are you");

// const arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 4 || arr[i] === 2) {
//     console.log(arr[i]);
//   }
// }

// arr.pop();
// arr.push(6);
// arr.push(7);
// console.log(arr);
