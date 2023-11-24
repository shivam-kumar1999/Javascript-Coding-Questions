//write a program to check no is prime or not


function checkPrime(num){

    for(let i=2; i<=num-1 ; i++){

        if(num%i==0){
           return false
        }
    }

    return true
}


console.log(checkPrime(7 ))