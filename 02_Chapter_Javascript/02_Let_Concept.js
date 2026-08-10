let a=10;
console.log(a);
for(let a=0;a<10000;a++)
{
    console.log(a);
    badCodeFn();
}
function badCodeFn()
{
    console.log('Hello');
}