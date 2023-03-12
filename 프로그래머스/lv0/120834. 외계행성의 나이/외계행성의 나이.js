function solution(age) {
    age = String(age).split("");
    
    let ans = "";
    
    for(i of age){
        ans += String.fromCharCode(Number(i) + 97);
    }
    
    return ans;
}