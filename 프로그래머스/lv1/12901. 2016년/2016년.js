function solution(a,b){
    var arr = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    var date = new Date(`2016-${a}-${b}`);
  var day = date.getDay()
    return arr[day];
}

// 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31

// 31 - 1, 3, 5, 7, 8, 10, 12
// 30 - 4, 6, 9, 11
// 29 - 2