function solution(board)
{
    let n = board.length, m = board[0].length;
    if(n === 1 || m === 1) {
        if(board.flat().some(el => el)) return 1;
    }
    let ans = 0;
    for(let i=1; i<n; i++) {
        for(let j=1; j<m; j++) {
            if(!board[i][j]) continue;
            let newVal = Math.min(
                board[i-1][j-1],
                board[i][j-1],
                board[i-1][j]
            ) + 1
            if(!newVal) continue;
            board[i][j] = newVal;
            ans = Math.max(ans, newVal);
        }
    }

    return ans**2;
}