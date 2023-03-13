function solution(hp) {
    var answer = 0;
    general = parseInt(hp / 5);
    soldier = parseInt(hp%5/3);
    ergate = parseInt(hp%5%3);
    answer = general + soldier + ergate;
    return answer;
}