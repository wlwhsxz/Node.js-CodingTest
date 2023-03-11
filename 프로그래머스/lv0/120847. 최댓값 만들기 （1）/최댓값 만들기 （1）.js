function solution(numbers) {
    var answer = 0;
    numbers.sort((a,b)=>{return a-b;})
    const len = numbers.length
    answer = numbers[len-1] * numbers[len-2];
    return answer;
}