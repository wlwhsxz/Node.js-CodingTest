function solution(id_pw, db) {
    var answer = '';
    for(let i of db){
        if(i[0] === id_pw[0] && i[1] !== id_pw[1]) answer = "wrong pw";
        else if(i[0] === id_pw[0] && i[1] === id_pw[1]) answer = "login";
    }
    console.log(answer)
    if (answer === "") answer = "fail";
    return answer;
}