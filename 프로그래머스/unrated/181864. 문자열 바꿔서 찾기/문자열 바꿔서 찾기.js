function solution(myString, pat) {
    myString = myString.split('').map(x=> x === 'A' ? 'B' : 'A').join('')
    return myString.includes(pat) ? 1 : 0;
}