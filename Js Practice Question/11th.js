//write a program that prints the numbers from 1 t0 100 , but for
//multiplies of 3 , print FIZZ instead of the number and for 
//multiplies of 5, print BUZZ and for numbers that are
//multiples of both 3 and 5 priont fizzbuzz


for(let i=1; i<=100; i++){
    
  if(i%3===0 && i%5===0){
    console.log("Fizz Buzz")
  }else if(i%3==0){
    console.log("Fizz")
  }else if(i%5===0){
    console.log("Buzz")
  }else{
    console.log(i)
  }

}