//STRING MANIPULATION

//write a function that takes a steing and return the reversed version of it..

let str= "Hello World";

function reverseString(str){
      return str.split("").reverse().join("");
}

console.log(reverseString(str));