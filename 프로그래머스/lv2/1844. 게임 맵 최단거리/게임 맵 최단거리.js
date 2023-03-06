function solution(maps) {
    let dx = [1, 0, -1, 0];
    let dy = [0, 1, 0, -1];
    let n = maps.length;
    let m = maps[0].length;
    
    for(let i=0; i<n; i++)
        for(let j=0; j<m; j++)
            maps[i][j] = maps[i][j] ? 0 : 1;
    maps[0][0] = 1;
    
    let q = [];
    q.push([0, 0]);
    while(q.length) {
        const [curX, curY] = q.shift();
        if(curX === n-1 && curY === m-1) return maps[curX][curY];
        
        for(let i=0; i<4; i++) {
            const [nextX, nextY] = [curX + dx[i], curY + dy[i]];
            if(
                isVal(nextX, nextY) && 
                (!maps[nextX][nextY] || maps[nextX][nextY] > maps[curX][curY]+1)
            ) {
                maps[nextX][nextY] = maps[curX][curY]+1;
                q.push([nextX, nextY]);
            }
        }
    }
    
    return -1;
    
    function isVal(x, y) {
        if(x >= 0 && x < n && y >= 0 && y < m) return true;
        return false;
    }
}