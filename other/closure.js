function sayHello() {
  console.log("hello");
}

function secureFunc(str1, func) {
  function attempt(str2) {
    if (str1 === str2) {
      return func();
    } else {
      return "Sorry your password is incorrect!";
    }
  }
  return attempt;
}

const a = secureFunc("hey", sayHello);
a("hey", "rhino");
