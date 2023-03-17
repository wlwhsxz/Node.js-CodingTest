function solution(array, n) {
    array.sort((a,b) => a-b)
    let arr = array.map(x=> Math.abs(x-n));
    let min = Math.min(...arr)
    let answer = arr.indexOf(min);
    return array[answer]
}