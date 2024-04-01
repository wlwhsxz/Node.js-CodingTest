/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim().split(' ');
    let arr = [];
    for(let i of s) {
        if (i !== '') arr.push(i);
    }
    let arrLen = arr.length;
    if (arrLen === 0) return 0; // 배열이 비어있는 경우 처리
    let lastWord = arr[arrLen-1];
    let wordLen = lastWord.length;

    return wordLen; // 결과 반환
};
