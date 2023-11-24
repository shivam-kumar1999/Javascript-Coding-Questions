//write a program to calculate the sum of the digits of a given number;

const number=12345;

    let sum=0;

    function sumOfNum(num ){

        while(num>0){
            sum+=num%10;

            num= Math.floor(num/10)
        }
        return sum
    }

    console.log(sumOfNum(number))