function solution(phone_number) {
    if(phone_number.length === 4) return phone_number
    var answer = '';
    let num = phone_number.substr(0, phone_number.length-4)
    let last4 = phone_number.substr(num.length, phone_number.length-1)
    for(let i=0; i<num.length; i++){
        answer += '*';
    }
    answer += last4
    return answer;
}