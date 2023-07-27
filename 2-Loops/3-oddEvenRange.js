// Given a range of numbers from 1 to 101 , finds all the even  numbers 2,3,4,5....

let remainder;

for(let i=1; i<=101; i++){
    remainder= i%2;
    if(remainder === 0){
        console.log(`${i} is an even number`);
    }else{
        console.log(`${i} is an odd number`);
    }
}