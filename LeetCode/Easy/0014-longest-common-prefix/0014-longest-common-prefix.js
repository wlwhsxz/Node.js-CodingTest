/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs.length) return "";

    let prefix = ""; 
    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i];
        if (strs.every((str) => i < str.length && str[i] === char)) {
            prefix += char;
        } else {
            break;
        }
    }
    return prefix;




    
};