let ans = 1;
const cloth = [];

function solution(clothes) {
    const clothMap = new Map();
    
    clothes.forEach(c => {
        const n = clothMap.get(c[1]) || 0;
        clothMap.set(c[1], n+1);
    })
    for(c of clothMap) cloth.push(c[1]);
    for(let i=0; i<cloth.length; i++)
        ans *= cloth[i]+1
 
    return ans-1;
}