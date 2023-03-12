function solution(N, road, K) {
    const map = new Array(N+1).fill(0).map((_, i)=>new Array(N+1).fill(Infinity));
    
    road.forEach(r => {
        map[r[0]][r[1]] = Math.min(r[2], map[r[0]][r[1]]);
        map[r[1]][r[0]] = Math.min(r[2], map[r[1]][r[0]]);
    })
    
    let ans = 1;
    const dist = new Array(N+1).fill(Infinity);
    const q = [];
    
    q.push(1);
    dist[1] = 0;
    
    while(q.length) {
        const curNode = q.shift();
        const curDist = dist[curNode];
        
        for(let i=1; i<=N; i++) {
            if(map[curNode][i] && (map[curNode][i] + curDist < dist[i]) && (map[curNode][i] + curDist <= K)) {
                dist[i] = curDist+map[curNode][i];
                q.push(i);
            }
        }
    }
    
    return dist.filter(el => el !== Infinity).length;

    return ans;
}