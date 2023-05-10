function solution(num_list) {
    let sumOdd = 0
    let sumEven = 0
    num_list.map((v, i) => {
        if(i % 2 === 0) sumOdd += v 
        else sumEven += v
    })
    return sumOdd > sumEven ? sumOdd : sumEven;
}