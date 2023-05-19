function solution(myString, pat) {
    myString = myString.split('').reverse().join('')
    pat = pat.split('').reverse().join('')
    
    let sliced = myString.slice(myString.indexOf(pat), )
    let answer = sliced.split('').reverse().join('')
    
    return answer
}

// 방법 1
// pat의 index를 찾아서 pat.length 만큼 splice한 문자열 반환
// 

// 방법 2
// myString을 reverse
// pat도 reverse해서 탐색