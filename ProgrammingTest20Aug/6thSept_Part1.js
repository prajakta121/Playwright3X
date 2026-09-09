// Write yoolution

function questionName(input) {
   const totalSteps = input.length;
  const passed = input.filter(step => step.status === "passed");
  
  const failed = input.filter(step => step.status === "failed");

  const skipped = input.filter(step => step.status === "skipped");

  const totalDuration = input.reduce(
        (sum, step) => sum + step.durationMs,
  
);
      const failedStepNames = failed
      .map(step => step.name)
      .join(", ");
      return {
totalSteps,
  passedCount: passed.length,
 failedCount: failed.length,
 skippedCount: skipped.length,
   totalDuration,
   failedStepNames

}
};