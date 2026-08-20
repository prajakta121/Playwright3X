const prompt=require("prompt-sync")({sigint:true});
let num=Number(prompt("Enter a number: "));
let a=0,b=1;
for(let i=1;i<=num;i++)
{
    console.log(a);
    let c=a+b;
    a=b;
    b=c;
}

