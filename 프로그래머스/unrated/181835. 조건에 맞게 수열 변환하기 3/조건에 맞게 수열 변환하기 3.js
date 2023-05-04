function solution(arr, k) {
    let answer = arr.map(x=> k%2 ===0 ? x+k : x*k)
    return answer;
}