const prompt=require("prompt-sync")({sigint:true});
let num=Number(prompt("Enter a number: "));
let factorial=1;
let i;
for(i=1;i<=num;i++)
{
    factorial=factorial*i;
    console.log("factorial is:"+ i +"X" + factorial);
}
console.log("The factorial of "+num+" is: "+factorial);
