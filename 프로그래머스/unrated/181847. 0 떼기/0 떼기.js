function solution(n_str) {
    if(n_str[0] !== '0') return n_str
    let count = 1
    
    for(let i in n_str){
        i = Number(i)
        if(n_str[i] === '0' && n_str[i+1] === '0') count++
        else break;
    }    
    
    return n_str.slice(count, )
}