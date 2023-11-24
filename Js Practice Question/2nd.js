//write a program to check if given year is leap year or not

//leapyears are divisible by 4
  // However, years divisible by 100 are not leap years unless they are also divisible by 400

let isleap=2022;

function leapYear(year){

    return (year%4 === 0 &&  year%100 !==0) || (year %400==0)
}

if(leapYear(isleap)){
    console.log("LeapYear")
}else{
    console.log("not leap")
}

