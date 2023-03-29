function solution(dirs) {
    const isVal = (x,y) => (x >= -5 && x <= 5 && y >= -5 && y <= 5);
    const dir = {
        L: [-1, 0],
        R: [1, 0],
        D: [0, -1],
        U: [0, 1],
    }
    
    const moves = new Set();
    let [x, y] = [0, 0];
    
    dirs.split('').forEach(d => {
        const [nx, ny] = [x + dir[d][0] , y + dir[d][1]];
        if(!isVal(nx, ny)) return;
        moves.add(''+x+y+nx+ny);
        moves.add(''+nx+ny+x+y);
        [x, y] = [nx, ny];
    })

    return moves.size/2;
}