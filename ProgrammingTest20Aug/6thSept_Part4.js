// Write your solutInput Format
function questionName(input) {
  
  const { allBrowsers, blockedBrowsers } = input;
  
  const runnableBrowsers = allBrowsers.filter(
    browser => !blockedBrowsers.includes(browser)

  );

  const blocked = allBrowsers.filter(
    
browser => blockedBrowsers.includes(browser)

  );

  const answer = {
  
runnableBrowsers,

blockedBrowsers: blocked,

plan: `Run on: ${runnableBrowsers.join(", ")} | Skip: ${blocked.join(", ")}`

return answer;

}