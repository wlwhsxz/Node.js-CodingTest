function solution(myStr) {
    var answer = [];
    const replaced = myStr.replace(/[a-c]/g, '-').split('-').flat()
    replaced.forEach((v) => {
        if(v.length > 0) return answer.push(v)
    })
    return answer.length === 0 ? ["EMPTY"] : answer;
}