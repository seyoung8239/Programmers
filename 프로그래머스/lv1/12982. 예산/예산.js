function solution(d, budget) {
    d.sort((a,b) => a-b);
    let cur = 0;
    let ans = 0;
    for(let i=0; i<d.length; i++) {
        if(cur + d[i] > budget) break;
        cur += d[i];
        ans++;
    }
    return ans; 
}