// Accessing & Modifying

let statuses = ["pass", "fail", "skip"];

console.log(statuses[0]);//pass
console.log(statuses[2]);//skip


console.log(statuses.at(-1));//skip
console.log("Result",statuses.at(-2));//fail

console.log(statuses.at(-4));//undefind

// Modify
statuses[1] = "blocked";
console.log(statuses);

// Length
console.log(statuses.length);