/*
Compare the results of two test runs, keyed by test id. Print four sections in this order: 
REGRESSED for tests that passed before and fail now, 
FIXED for tests that failed before and pass now, 
NEW for tests that only exist in the current run, 
and REMOVED for tests that only existed in the previous run. 
Sort the names inside each section alphabetically, 
and print NONE under a section that has no entries.
*/
const lines = String(require('fs').readFileSync(0, 'utf8')).split('\n');
const before = [], after = [];
let target = before, switched = false;
for (const raw of lines) {
  if (!raw.trim()) {
    if (!switched) { target = after; switched = true; }
    continue;
  }
  target.push(raw.trim());
}
function compareTestRuns(before, after) {
    const prevMap = new Map(); 
    const currMap = new Map();

    before.forEach(line => {
                const [testId, status] = line.split("|");
        prevMap.set(testId, status);
    });

   after.forEach(line => {
            const [testId, status] = line.split("|");
        currMap.set(testId, status);
            });
    const regressed = [];
    const fixed = [];
    const newlyAdded = [];
    const removed = [];
    for (const [testId, prevStatus] of prevMap) {
        
        if (currMap.has(testId)) {
            
            const currStatus = currMap.get(testId);
    
            if (prevStatus === "PASS" && currStatus === "FAIL") {
       
                regressed.push(testId);
               
            } else if (prevStatus === "FAIL" && currStatus === "PASS") {
                
                fixed.push(testId);
           
            }
          
        } else {
            
            removed.push(testId);
            
        }
        
    }
   
    for (const testId of currMap.keys()) {
        
        if (!prevMap.has(testId)) {
            
            newlyAdded.push(testId);
          
        }
        
    }
   

    
    regressed.sort();
   

    newlyAdded.sort();
 
    removed.sort();
    
    const printSection = (title, arr) => {
        console.log(title);
             if (arr.length === 0) {
                console.log("NONE");
            } else {
        
            arr.forEach(t => console.log(t));
        
        }
    
    };
    printSection("REGRESSED", regressed);
   printSection("FIXED", fixed);
    
    printSection("NEW", newlyAdded);
    
    printSection("REMOVED", removed);

}
compareTestRuns(before, after);

// Write your solution here
    
