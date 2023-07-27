// Logical Operator with conditonal CSSLayerStatementRule

// 1-->> OR    ||--> if atleast one condition is true then || will return true otherwise ||will return false
// 2-->> AND   &&--> all the condition must be true 
// 3-->> NOT    !---> it will reverse your logic
// 4-->> NUllish Coalescing ??


const physics = 90;
const maths = 95;
const chemistry=83;
const biology=96;


if(physics >90 || maths > 85 || chemistry > 89){
    console.log("You are eligible for Engg...")
}else{
    console.log("You are not eligible for ENgg...")
}

if(physics > 90 && maths > 85 && chemistry > 89){
    console.log("You are eligible for Engg...")
}else{
    console.log("You are not eligible for ENgg...")
}