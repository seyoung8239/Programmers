let lowerBound = (A, T) => {
    let N = A.length, i = 0, j = N;
    while (i < j) {
        let k = Math.floor((i + j) / 2);
        if (+A[k] < T) i = k + 1;
        else j = k;
    }
    return i;
};

const tt = [
    {cpp: 0, java: 1, python: 2, ['.']: '.'},
    {backend: 0, frontend: 1, ['.']: '.'},
    {junior: 0, senior: 1, ['.']: '.'},
    {chicken: 0, pizza: 1, ['.']: '.'},
]

let tempQuery = [];

function bt(cnt, acc, str) {
    if(cnt === 4) {
        tempQuery.push(acc.join(''));
        return;
    }
    if(str[cnt] !== '.') {
        bt(cnt+1, [...acc, str[cnt]], str);
        return;
    }
    if(cnt === 0) {
        bt(cnt+1, [...acc, 0], str);
        bt(cnt+1, [...acc, 1], str);
        bt(cnt+1, [...acc, 2], str);
    }
    if(cnt === 1) {
        bt(cnt+1, [...acc, 0], str);
        bt(cnt+1, [...acc, 1], str);
    }
    if(cnt === 2) {
        bt(cnt+1, [...acc, 0], str);
        bt(cnt+1, [...acc, 1], str);
    }
    if(cnt === 3) {
        bt(cnt+1, [...acc, 0], str);
        bt(cnt+1, [...acc, 1], str);
    }
}

const tokenToDig = (tokens) => tokens.map((t, i) => tt[i][t]).join('')

function solution(info, _query) {
    const db = new Map();
    info.forEach(iEl => {
        const tokens = iEl.split(' ');
        const key = tokenToDig(tokens.slice(0,4));
        const val = db.get(key);
        db.set(key, val ? val.concat(tokens[4]) : [tokens[4]])
    });
    [...db.values()].forEach(v => v.sort((a, b) => +a - +b));
    
    const query = _query.map(qEl => {
        const tokens = qEl
            .split(' ')
            .filter(q => q !== 'and')
            .map(q => (q === '-') ? '.' : q);
        const a = tokenToDig(tokens.slice(0, 4));
        tempQuery = [];
        bt(0, [], a);
        
        return [tokens[4], tempQuery];
    })
    
    return query.map(qEl =>  {
        let [score, queries] = qEl;
        let cnt = 0;
        queries.forEach(q => {
            const rows = db.get(q);
            if(!rows) return;
            const idx = lowerBound(rows, +score);
            cnt += rows.length - idx;
        })
        
        return cnt;    
    })
}