// function solution(new_id) {
//     // 1. id 3자 이상 15자 이하
//     // 2. id는 알파벳 소문자, 숫자, -_.만 사용 가능
//     // 3. 마침표(.) 처음, 끝 사용 불가, 연속 사용 불가
//     // 4. "네오"가 설계한 7단계의 처리 과정을 거친 후의 추천 아이디를 return
    
// // 1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
//     new_id = new_id.toLowerCase();
// // 2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
//     new_id = new_id.replace(/[^\w\-\./]/g, '');
// // 3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
//     new_id = new_id.replace(/\.{2,}/g, '.');
// // 4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
//     new_id = new_id.replace(/^\.|\.$/, '');
// // 5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
//     new_id.length === 0 ? new_id += 'a' : new_id;
// // 6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
// //      만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
//     new_id.length >= 16 ? new_id = new_id.slice(0, 15) : new_id;
//     new_id = new_id.replace(/\.$/, '');
    
// // 7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.
//     let bool = true
//     while(bool){
//         if(new_id.length <= 2) new_id += new_id[new_id.length-1];
//         else {
//             bool = false;
//         }
//     }

//   return new_id;
// }

function solution(new_id) {
  // 1단계: 모든 대문자를 소문자로
  new_id = new_id.toLowerCase();

  // 2단계: 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자 제거
  new_id = new_id.replace(/[^\w\-\.]/g, "");

  // 3단계: 연속되는 마침표는 마침표 하나로
  new_id = new_id.replace(/\.{2,}/g, ".");

  // 4단계: 처음이나 끝에 마침표가 있으면 제거
  new_id = new_id.replace(/^\.|\.$/, "");

  // 5단계: new_id가 빈 문자열이면 "a" 대입
  if (new_id.length === 0) new_id = "a";

  // 6단계: new_id의 길이가 16자 이상이면,
  // new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거
  // 제거 후 끝에 마침표가 있으면 제거
  if (new_id.length >= 16) new_id = new_id.slice(0, 15);
  new_id = new_id.replace(/\.$/, "");

  // 7단계: new_id의 길이가 2자 이하이면,
  // new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 이어붙임
  let len = new_id.length;
  if (len <= 2) new_id = new_id + new_id[len - 1].repeat(3 - len);

  return new_id;
}