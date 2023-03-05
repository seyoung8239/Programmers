function solution(_board, moves) {
    const [ColLen, rowLen] = [_board.length, _board[0].length];
    const board = new Array(ColLen).fill().map((_, i) => 
        new Array(rowLen).fill().map((__, j)=>
            _board[j][i]
        ).filter(el => el !== 0));

    const basket = [];
    let ans = 0;
    moves.forEach(m => {
        if(!board[m-1].length) return;
        basket.unshift(board[m-1].shift());
        if(basket[0] === basket[1]) {
            ans++
            basket.splice(0, 2);
        };
    })
    return ans*2;
}