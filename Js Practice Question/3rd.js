//write a program to calculate the sum of the first 100 natural numbers.


function sumNatural(n){

    let sum=0;

    for(let i=1; i<=n; i++){
     sum= sum+i
    }

    return sum;
    
}

console.log(sumNatural(1000))