const prompt = require('prompt-sync')();
let arr=[5];
for(let i=0;i<5;i++)
{
    console.log("Enter the number "+(i+1));
    arr[i]=Number(prompt());    
}
let sortedArr=arr.sort(function(a,b){return a-b});
console.log("Largest 3 numbers are: "+sortedArr[4]+", "+sortedArr[3]+", "+sortedArr[2]);    

