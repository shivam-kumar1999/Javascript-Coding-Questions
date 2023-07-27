//Q4-- Given the side lenght of a traingle in the form of 3 integers. check if the given triangle is equilateral or scalene, isoceles..

//example---- a=7, b=7, c=7; ===Equilateral.
//example----a=8, b=12, c=5; ===scalene.\
//example----a=8, b=14, c=8; ===isoceles.

let a=8;
let b=9;
let c=10;

if(a==b && b==c && a==c){
    console.log("equilateral")
}else if(a==b || b==c || a==c){
    console.log("isoceles")
}else{
    console.log("scalene")
}