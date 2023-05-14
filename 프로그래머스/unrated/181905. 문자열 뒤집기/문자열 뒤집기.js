function solution(my_string, s, e) {
    let answer = []
    for(let i in my_string){
        i = Number(i)
        if(i >= s && i <= e) {
            answer.push(my_string[i])
        }
    }
    answer = answer.reverse().join('')
    let newStr = my_string.slice(0, s).concat(answer).concat(my_string.slice(e+1,))
    return newStr;
}