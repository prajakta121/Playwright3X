const prompt=require("prompt-sync")({sigint:true});
let inputstr;
inputstr=prompt("Enter a string to check for palindrome: ");
let reversedstr=inputstr.split("").reverse().join("");
if(inputstr===reversedstr)
{
    console.log(inputstr+"is a palindrome string");
}
else
{
    console.log(inputstr+"is not a palindrome string");
}
