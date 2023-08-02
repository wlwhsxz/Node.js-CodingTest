function solution(arr) {
    var answer = [];
    let i = 0;
    
    while(i < arr.length) {
        if(answer.length === 0) {
            answer.push(arr[i]);
            i++;
        } else if(answer.length > 0 && answer[answer.length-1] === arr[i]) {
            answer.pop();
            i++;
        } else if(answer.length > 0 && answer[answer.length-1] !== arr[i]) {
            answer.push(arr[i]);
            i++;
        }
    }
    
    answer.length === 0 ? answer = [-1] : answer;
    return answer;
}

// 0과 1로만 이루어진 정수 배열 arr
// arr을 이용해 새로운 배열 stk 만들기
// i의 초기값을 0으로 설정
// i가 arr의 길이보다 작으면 다음을 반복
// 만약 stk가 빈 배열이라면 arr[i]를 stk에 추가하고 i에 1을 더함
// stk에 원소가 있고, stk의 마지막 원소가 arr[i]와 같으면 stk의 마지막 원소를 stk에서 제거하고 i에 1을 더함
// "" "", arr[i]와 다르다면 stk의 맨 마지막에 arr[i]를 추가하고 i에 1을 더함
// 이 작업 완료 후 return 하기
// 빈 배열 이라면 [-1]