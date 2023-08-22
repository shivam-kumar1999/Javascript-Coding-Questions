//create a program to check if a given year is leap year or not.


function leapYear(year){

    if(year%4==0  && year % 100 !==0 || year%400===0){
        return("leap")
    }else{
        return("no leap")
    }

}

console.log(leapYear(2023));

//same solution with arrow funtion.

let leapYearrr =(year)=>{

    if( year%4===0 && year % 100 !==0 || year%400===0 ){
        return("leap")
    }else{
        return("no leap")
    }
}

console.log(leapYearrr(2022));