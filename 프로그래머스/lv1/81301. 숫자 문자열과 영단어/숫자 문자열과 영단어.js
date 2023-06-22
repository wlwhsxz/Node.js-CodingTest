function solution(s) {
    var answer = '';
    let result = '';
    const num = {
        zero: '0',
        one: '1',
        two: '2',
        three: '3',
        four: '4',
        five: '5',
        six: '6',
        seven: '7',
        eight: '8',
        nine: '9'
    };
    
    for(let i of s) {
        if(i.match(/[0-9]/g)) result += i
        if(i.match(/[a-z]/g)) {
            answer += i
        }
        if(num.hasOwnProperty(answer)) {
            result += (num[answer])
            answer = ''
        }
    }
    return Number(result)
}