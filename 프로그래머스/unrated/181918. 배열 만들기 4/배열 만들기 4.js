function solution(arr) {
    var stk = [];
    console.log(arr.length)
    i = 0;   
    while(i < arr.length) {
      if(stk.length < 1) {
         stk.push(arr[i])
          i++
      } else {
        if(stk[stk.length-1] < arr[i]) {
          stk.push(arr[i])
          i++
        }
        if(stk[stk.length-1] >= arr[i]) {
          stk.pop()
         }
      }
    }
    
    return stk;
}