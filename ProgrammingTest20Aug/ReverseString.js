const prompt=require("prompt-sync")({ sigint: true });
let inputstr;
inputstr=prompt("Enter a string to reverse: ");
console.log("The Reversed string is:"+inputstr.split("").reverse().join(""));
