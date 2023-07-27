//Q3-- Given 3 integers a,b,c check if we can form a traingle with the sides of the traingle having length a,b and c.

//we know that-- if we want to create a triangle with a,b,c sides the for each side the sum of other 2 sides should be greater..



let a=10;
let b=12;
let c=5;

if(a+b >c && a+c >b && b+c>a){
    console.log("yes");
}else{
    console.log("No")
}