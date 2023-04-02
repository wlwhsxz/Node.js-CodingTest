function solution(word) {
  // 모든 가능한 문자열 생성하기
  const words = [];
  const vowels = ['A', 'E', 'I', 'O', 'U'];
  for (const v1 of vowels) {
    words.push(v1);
    for (const v2 of vowels) {
      words.push(v1 + v2);
      for (const v3 of vowels) {
        words.push(v1 + v2 + v3);
        for (const v4 of vowels) {
          words.push(v1 + v2 + v3 + v4);
          for (const v5 of vowels) {
            words.push(v1 + v2 + v3 + v4 + v5);
          }
        }
      }
    }
  }

  // 문자열 사전순으로 정렬하기
  words.sort();

  // 위치 찾기
  return words.indexOf(word) + 1;
}
