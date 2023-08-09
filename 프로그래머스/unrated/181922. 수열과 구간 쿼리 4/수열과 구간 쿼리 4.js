function solution(arr, queries) {
    return queries.reduce((acc, cur) => {
        const copyArr = [...acc]
        const [to, from, val] = cur
        return copyArr.map((el, elIdx) => {
            if(elIdx >= to && elIdx <= from) {
                if(elIdx%val === 0) return el+1
            }
            return el
        })
    }, arr)
}

// 1차원 정수 배열 arr
// 2차원 정수 배열 queries
// queries의 각각 원소 query [s, e, k]
// s <= i <= e 인 arr[i]에 대해 i가 k의 배수이면 arr[i]에 +1
// 이를 적용한 arr을 return

