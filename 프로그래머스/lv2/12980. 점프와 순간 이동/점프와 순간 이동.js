function solution(n)
{
    var ans = 0;

    while(n !== 0) {
        if(n%2 === 0) {
            n = n / 2;
        } else {
            n -= 1;
            ans++;
        }
    }    
    
    return ans;
}

// K 칸 앞으로 (점프)
// 현재까지 온 거리 x 2 (순간이동)

// 점프는 건전지 사용량 K만큼 감소
// 순간이동은 감소 없음

// N 만큼 떨어져 있는 장소로 최소 건전지 사용량으로 이동
// 건전지 사용량의 최솟값 return
