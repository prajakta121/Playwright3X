const prompt = require('prompt-sync')({sigint:true});
let arr = [];
for (let i = 0; i < 5; i++) {
    console.log("Enter the number " + (i + 1));
    arr[i] = Number(prompt());
}

let result = [];
for(let i=1;i<5;i++)
{
    if (!result.includes(arr[i])) 
{
result.push(arr[i]);
}
}
console.log("Array after removing duplicates:", result);
