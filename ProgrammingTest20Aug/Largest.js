const prompt = require('prompt-sync')();
let arr=[5];
for(let i=0;i<5;i++)
{
    console.log("Enter the number "+(i+1));
    arr[i]=Number(prompt());    
}
let largest=arr[0];
for(let i=1;i<5;i++)
{
    if(arr[i]>largest)
    {
        largest=arr[i];
    }
}   
console.log("The largest number is: "+largest); 
