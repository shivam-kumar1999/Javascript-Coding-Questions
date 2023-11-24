//write a program to count themb nuer of  digits of a given number..

let number=123456;

let count=0;

while(number/10){
    number= Math.floor(number/10)
    count++
}
console.log(count)