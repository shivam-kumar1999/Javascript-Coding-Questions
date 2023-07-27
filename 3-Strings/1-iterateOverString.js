//  Check for repitition in the code , checking for "a" in the message.

let displayMessage = "i am a Bca Student ";
let count=0;

for (let char of displayMessage){
    if(char=== "a"){
        count++;
    }
    
}
console.log(count);