function solution(n) {
    var answer = 0;
    let m = 0;
    let mBinary = ''
    let nCount = 0;
    let mCount = 0;
    
    while(true){
        let nBinary = n.toString(2)
        m = ++n;
        mBinary = m.toString(2);
        
        for(let i=0; i<nBinary.length; i++){
            if(nBinary[i] === '1') nCount++
        }
        for(let i=0; i<mBinary.length; i++){
            if(mBinary[i] === '1') mCount++
        }
        if(nCount === mCount) return m
    }
}