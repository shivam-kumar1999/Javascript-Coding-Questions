//write a program to print the sum of all  even numbers from 1 to any given number..

const number=3;
let sum=0;
for(let i=1 ; i<=number; i++){

    if(i%2==0){
        sum=sum+i
    }
    
}
console.log(sum)
