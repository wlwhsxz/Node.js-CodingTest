function solution(a, b) {
    const daysForWeek = ['SUN','MON','TUE','WED','THU','FRI','SAT']
    // 1월 1일 금요일만큼을 SUN에서 건너뛰기 
    const firstDayAdd = 5
    const daysForMonth = {
        1 : 31,
        2 : 29,
        3 : 31,
        4 : 30,
        5 : 31,
        6 : 30,
        7 : 31,
        8 : 31,
        9 : 30,
        10 : 31,
        11 : 30,
        12 : 31
    }

    let dayCount = 0
    Object.entries(daysForMonth).map(([key,value])=>{
        if(Number(key) < a){
            dayCount += value
        }
        else if(Number(key) === a){
            dayCount += b
        }
    })

    // 1월1일부터 특정날짜까지 + 0부터 시작하지않는만큼 추가 + (0부터 시작하는 인덱스 처리) 
    const answer = daysForWeek[(dayCount+firstDayAdd-1) % 7]

    return answer;
}

// 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31

// 31 - 1, 3, 5, 7, 8, 10, 12
// 30 - 4, 6, 9, 11
// 29 - 2