function solution(num_list) {
    const multiple = num_list.reduce((a,b)=>a*b)
    const sumSquare = Math.pow(num_list.reduce((a,b)=>a+b), 2)
    return multiple > sumSquare ? 0 : 1;
}