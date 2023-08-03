function solution(arr) {
    var answer = [[]];
    
    while(arr.length !== arr[0].length) {
        if(arr.length > arr[0].length) {
            arr.forEach(v => {
                v.push(0)
            })
        } else if(arr.length < arr[0].length) {
            arr.push(Array(arr[0].length).fill(0))
        }
    }
    
    
    return arr;
}

// 이차원 정수 배열 arr
// arr의 행의 수가 더 많다면 열의 수가 행의 수와 같아지도록 각 행의 끝에 0을 추가
// 열의 수가 더 많다면 행의 수가 열의 수와 같아지도록 각 열의 끝에 0을 추가한 이차원 배열 추가