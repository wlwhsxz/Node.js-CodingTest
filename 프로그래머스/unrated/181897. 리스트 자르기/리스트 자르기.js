function solution(n, slicer, num_list) {
    var answer = [];
    
    if(n === 1){
       answer.push(num_list.slice(0, slicer[1]+1));
    }
    if(n === 2){
        answer.push(num_list.slice(slicer[0],));
    }
    if(n === 3){
        answer.push(num_list.slice(slicer[0], slicer[1]+1));
    }
    if(n === 4){
        const sliced = num_list.slice(slicer[0], slicer[1]+1);
        const abc = sliced.filter((v, i) => i%slicer[2] === 0)
        answer.push(abc)
    }
    return answer.flat();
}