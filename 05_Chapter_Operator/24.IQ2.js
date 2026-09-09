let enivornment="statging";
let baseUrl=enivornment==="prod"
? "http://api.example.com"
:"http://staging-api.example.com"
console.log(baseUrl);
