function solution(spell, dic) {
    var answer = 2;
    spell = spell.sort().reduce((a,b) => a+b);
    dic = dic.map(x=> x.split('').sort().reduce((a,b)=> a+b))
    dic.includes(spell) ? answer = 1 : answer;
    return answer;
}