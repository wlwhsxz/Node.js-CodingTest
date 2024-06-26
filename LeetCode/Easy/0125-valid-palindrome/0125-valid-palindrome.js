/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let filteredS = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    let reversedS = filteredS.split('').reverse().join('');

    return filteredS === reversedS;
};
