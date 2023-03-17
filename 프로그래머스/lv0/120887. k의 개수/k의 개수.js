function solution(i, j, k) {
    let a ='';
    for(i;i<=j;i++){
        a += i;
    }
        console.log(a.split(k))

    return a.split(k).length-1;
}