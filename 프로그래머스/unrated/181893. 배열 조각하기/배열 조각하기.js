function solution(arr, query) {
    var answer = [];
    
    query.forEach((v, i) => {
        if(i%2 === 0) {
            arr = (arr.splice(0, v+1))
        } else {
            arr = arr.splice(v, )
            console.log(arr)
        }
    })
    return arr;
}