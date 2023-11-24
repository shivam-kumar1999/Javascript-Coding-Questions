// write a program to find and print  all the prime numbers within 1-100.


 function checkPrime(num){

    for(let i=2; i<=Math.sqrt(num); i++ ){

        if(num%i===0){
            return false
        }
    }

    return true
 }


 

 function allPrimeNumber(start , end ){

    for(let i=start; i<=end; i++){

        if(checkPrime(i)){
            console.log(i)
        }
    }
 }

 console.log(allPrimeNumber(1, 100))