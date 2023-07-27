


const input= "hello , i am good how are you";

const vowels= "aeiou";

for(let i=0; i<input.length; i++){
    if(vowels.includes(input[i])){
        console.log(`${input [i]} is a vowel`);
    }else{
        console.log(`${input [i]} is not a vowel`);
    }
}