function solution(k, score) {
  const honor = [];
  const answer = [];

  // 들어온 score을 forEach() 메서드를 이용해 반복한다.
  score.forEach((n) => {
    
    // honor에 요소를 넣어주고
    honor.push(n);
    // sort() 메서드를 사용해 내림차순으로 정렬을 해준다.
    honor.sort((a, b) => b - a);

    if (honor.length >= k ) {
      // 명예의 전당에 수가 k번 째보다 클 경우
      // k번 째 이후는 명예의 전당에 포함되지 않기 때문에
      // 정렬한 배열의 k - 1(배열은 0부터 시작하기에)을 넣어준다.
      answer.push(honor[k - 1]);
    } else {
      // k번 째보다 작은 경우는 명예의 전당에 모두 포함되기 때문에
      // 정렬한 배열의 마지막 요소가 젤 낮은 점수이다.
      answer.push(honor[honor.length - 1]);
    }
  });

  return answer;
}