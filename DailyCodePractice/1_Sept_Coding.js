/*Read two version numbers and decide which one is newer. Compare them part by part as numbers, 
not as text, so 1.10 is newer than 1.9. When one version has fewer 
parts, treat the missing parts as zero, so 1.0 and 1.0.0 are the same version. 
Leading zeros inside a part are allowed. Print -1 when the first is older, 1 when the first is newer, and 0 when they match.
const lines = String(require('fs').readFileSync(0, 'utf8')).split('\n');*/
const first = lines[0];
const second = lines[1];

// Write your solution here
function compareVersion(first,second)
{
    const f1 = first.split(`.`);
    const s1 = second.split(`.`);
    const maxlength = Math.max(f1.length, s1.length);

    for (let i = 0; i < maxlength; i++)
    {
        const num1 = i < f1.length ? parseInt(f1[i], 10) : 0;
        const num2 = i < s1.length ? parseInt(s1[i], 10) : 0;
        if (num1 < num2)
            return -1;
        if (num1 > num2)
            return 1;
    }
    return 0;
}
console.log(compareVersion(first,second));