function solution(arr, queries) {
    var answer = [];
    
    queries.forEach(v => {
        let first = v[0];
        let second = v[1];
        
        [arr[first], arr[second]] = [arr[second], arr[first]];       
        
    })
    
    
    return arr;
}

// 1차원 정수 배열 arr
// 2차원 정수 배열 queries
// queries의 원소 query [i, j]
// 각 query에 해당하는 arr[i], arr[j]의 위치를 바꾸기
// 모든 위치를 바꾼 뒤 이를 return

// Q. 특정 인덱스의 위치만을 어떻게 바꾸지????
// replace() 와 indexOf()를 쓴다면?
// replace() 는 일치하는 값의 첫 인덱스를 바꾸는 동작때문에 예외가 발생할 듯 하지만 일단 도전