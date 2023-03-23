function solution(arr) {
    const min = Math.min(...arr)
    arr = arr.filter(x => x !== min)
    arr.length === 0 ? arr.push(-1) : arr;
    return arr;
}