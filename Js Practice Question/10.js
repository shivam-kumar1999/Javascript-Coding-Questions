//write a program to reverse a given number for ex-12345 t0 54321


let number=12345;
let rev=0;

while(number>0){

    rev= rev*10 + number%10;
    number=Math.floor(number/10)
}

console.log(rev)



