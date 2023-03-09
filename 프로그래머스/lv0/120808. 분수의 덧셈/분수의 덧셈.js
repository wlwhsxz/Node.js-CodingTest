function solution(numer1, denom1, numer2, denom2) {

    let numerator = (numer1*denom2) + (denom1*numer2)
    let denominator = (denom1*denom2)
    let comFac = 1
    for(i=2;i<=denominator;i++) {
        if(numerator%i===0 && denominator%i===0) {
            comFac = i
        }
    }
    return [numerator/comFac, denominator/comFac]
    
}