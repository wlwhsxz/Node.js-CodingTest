// function solution(cacheSize, cities) {
//     var answer = 0;
//     let cacheIdx = 0; 
//     let cache = [];
    
//     let lowerCities = cities.map(v => v.toLowerCase())
    
//     lowerCities.forEach((v) => {
//         if(!cache.includes(v) && cache.length < cacheSize) {
//             cache.push(v);
//             answer += 5;
//         }
//         else if(!cache.includes(v) && cache.length >= cacheSize) {
//             cache[cacheIdx] = v;
//             answer += 5;
//             cacheIdx++;
//             if(cacheIdx >= cacheSize) cacheIdx = 0;
//         }
//         else {
//             answer++;
//         }
        
//     })
    
//     return cacheSize === 0 ? cities.length*5 : answer;
// }

function solution(cacheSize, cities) {
    const cache = []
    let executeTime = 0
    cities.forEach(city=>{
        const lowerCity = city.toLowerCase()
        if(cache.includes(lowerCity)){
            executeTime += 1
        }
        else{
            executeTime += 5
        }

        if(cacheSize>0){
            if(cache.includes(lowerCity)){
                cache.splice(cache.indexOf(lowerCity),1)
                cache.push(lowerCity)
            }
            else if(cache.length === cacheSize){
                cache.shift()
                cache.push(lowerCity)
            }
            else{
                cache.push(lowerCity)
            }
        }
    })

    return executeTime
}