
function runStep(stepName, actionFn) {
console.log(`Starting step: ${stepName}`);
try {
const result = actionFn();
return {
stepName,
passed: true,
};
} catch (error) {
return {
stepName,
passed: false,
message: error.message
};
}
}