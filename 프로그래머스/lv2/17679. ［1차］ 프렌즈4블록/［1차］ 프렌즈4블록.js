let board;
let totalScore = 0;

function solution(n, m, _board) {
    board = new Array(m).fill().map(()=>new Array(n).fill());
    for(let i=0; i<m; i++) {
        for(let j=0; j<n; j++) {
            board[i][j] = _board[j][i];
        }
        board[i] = board[i].join('');
    }
    
    while(1) {
        let score = getScore(n, m);
        
        if(!score) break;
        totalScore += score;
    }
    
    return totalScore;
}

function getScore(n, m) {
    const check = new Array(m).fill().map(()=>new Array(n).fill(false));
    for(let i=0; i<m-1; i++) {
        for(let j=0; j<n-1; j++) {
            if(isVal(i, j)) {
                check[i][j] = true;
                check[i+1][j] = true;
                check[i][j+1] = true;
                check[i+1][j+1] = true;
            }
        }
    }
    
    let score = 0;
    for(let i=0; i<m; i++)
        for(let j=0; j<n; j++)
            if(check[i][j]) score++;
    
    initBoard(check, n, m);
    return score;
}

function initBoard(check, n, m) {
    for(let i=m-1; i>=0; i--) {
        for(let j=n-1; j>=0; j--) {
            if(check[i][j]) {
                board[i] = board[i].slice(0, j) + board[i].slice(j+1)
            }
        }
        board[i] = board[i].padStart(n, '0')
    }
}


function isVal(x, y) {
    dx = [1, 1, 0];
    dy = [1, 0, 1];

    if(board[x][y] === '0') return false;
    for(let i=0; i<3; i++)
        if(board[x][y] !== board[x+dx[i]][y+dy[i]]) return false;
    return true;
}