let str = "hello 33, meet 22 h ";

let regex1 = /h/;
let regex2 = /\s+/g;

console.log(str.match(regex2));
console.log(regex2.test(str));
