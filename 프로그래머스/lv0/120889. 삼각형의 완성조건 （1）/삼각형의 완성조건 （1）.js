function solution(sides) {
    var answer = 0;
    sides.sort((a,b) => {
        return a-b;
    })
    return sides[2] >= sides[1] + sides[0] ? 2 : 1;
}