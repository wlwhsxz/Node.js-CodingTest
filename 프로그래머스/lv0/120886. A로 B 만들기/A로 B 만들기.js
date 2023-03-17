function solution(before, after) {
    before = before.split('').sort();
    after = after.split('').sort();
    let count = 0;
    for(let i in before){
        before[i] === after[i] ? count++ : count;
    }    
    return count === before.length ? 1 : 0;
}