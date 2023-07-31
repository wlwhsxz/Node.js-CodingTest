function solution(arr, k) {
    var answer = [];
    let len;
    let sliced;
    
    arr = Array.from(new Set(arr))
    len = arr.length;
    sliced = arr.slice(0, k);
    
    if(len >= k) {
        return sliced;
    }
    
    for(let i = 0; i < k - len; i++) {
        sliced.push(-1);
    }
    
    return sliced;
}


// 서로 다른 수 k개가 있는 배열
// 일정 범위 내 무작위 수
// 나온 적 없는 수 배열 맨 뒤 추가
// 만들어질 길이 k의 배열
// 주어진 정수 배열 arr
// 완성될 배열 길이가 k보다 작으면 나머지 배열 값을 -1로 채우기
