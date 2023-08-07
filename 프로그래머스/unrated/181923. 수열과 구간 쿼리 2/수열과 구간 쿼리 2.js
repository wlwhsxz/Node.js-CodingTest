function solution(arr, queries) {
    var answer = [];

    queries.forEach(v => {
        let sliced = arr.slice(v[0], v[1]+1)
        let filtered = [];
        sliced.filter(x => {
            x > v[2] ? filtered.push(x) : filtered;
        })
        let min = Math.min(...filtered);
        min !== Infinity ? answer.push(min) : answer.push(-1);
    })
    return answer;
}

// 1차원 정수 배열 arr
// 2차원 정수 배열 queries
// query는 queries의 각각의 원소 [s, e, k]
// s <= i <= e
// 모든 i에 대해 k보다 크면서 가장 작은 arr[i]