function solution(id_list, report, k) {
    var answer = Array(id_list.length).fill(0);
    var reported_list = {};
    
  id_list.map((user)=>{
        reported_list[user] = [] 
      //key로 userid를 value로 빈 배열을 가지는 객체
    })
    
    report.map((user)=>{
        const [user_id, report_id] = user.split(' ')
        if(!reported_list[report_id].includes(user_id)){
            reported_list[report_id].push(user_id)
        }        
    })
    
    for(const key in reported_list){
     if(reported_list[key].length >= k){
        reported_list[key].map((user)=>{
            answer[id_list.indexOf(user)] += 1
        })
      }
    }
    
    return answer;
}

// 한 번에 한 명의 유저 신고
// 신고 횟수 제한 x
// 서로 다른 유저 계속 신고 o
// 한 유저 여러번 신고 o
// 동일한 유저 -> 신고 1회
// k번 이상 신고된 유저 -> 게시판 이용 정지, 해당 유저를 신고한 모든 유저에게 정지 사실 메일 발송
// + 유저가 신고한 모든 내용을 취합하여 마지막에 한꺼번에 게시판 이용 정지를 시키면서 정지 메일을 발송

// 막힌 부분 
// 1. report 배열을 어떻게 나눠서 값을 저장할 것인가?
// 2. 신고 한 id, k를 넘는(정지된) id를 어떻게 구분하는가?

