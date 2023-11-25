//write a program to print the fibonacci series up to a given number..


let a=0;
let b=1;
let c;

function fibo(num){
    
    for(let i=0; i<num; i++){
        
        console.log(a);
        c=a+b
        a=b;
        b=c
        
    
    }
    
}

console.log(fibo(6))

