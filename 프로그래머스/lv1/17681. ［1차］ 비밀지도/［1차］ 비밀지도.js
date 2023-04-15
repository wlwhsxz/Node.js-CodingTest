// 암호 해독하기

// 1.
// 지도의 한 변 크기 n
// 정사각형 배열
// 각 칸은 " " - 공백, "#" - 벽 두 종류로 구성

// 2.
// 전체 지도는 두 장의 지도를 겹쳐서 획득 가능 - 지도1, 지도2
// 지도1, 2에서 공백 혹은 벽인 부분은 전체 지도에서도 공백 혹은 벽
// 지도1, 2는 각각 정수 배열로 암호화
// 암호화된 배열은 지도의 각 가로줄에서 벽, 공백을 1, 0 으로 부호화했을 때 얻어지는 이진수에 해당하는 값의 배열

// 2개의 정수 배열 - arr1, arr2

function solution(n, arr1, arr2){

    var solution=(n,a,b)=>a.map((a,i)=>(a|b[i]).toString(2).padStart(n,0).replace(/0/g,' ').replace(/1/g,'#'))

    return solution(n, arr1, arr2)
}


// function solution(n, arr1, arr2) {
//     var answer = [];
//     for(let i in arr1){
//         arr1[i] = arr1[i].toString(2).split('').map(x=> x==='1'? x='#' : x)
//         arr2[i] = arr1[i].toString(2).split('').map(x=> x==='1'? x='#' : x)

//     }
    
//     console.log(arr1)
//     console.log(arr2)
    
//     for(let i in arr2){
//         let str = ''
//         for(let j in arr2[i]){
//             if(arr1[i][j] === "#" || arr2[i][j] === '#') str += '#'
//             if(arr1[i][j] === '0' && arr2[i][j] === '0') str += ' '
//         }
//         // console.log(str)
//         answer.push(str)
//     }
// }


