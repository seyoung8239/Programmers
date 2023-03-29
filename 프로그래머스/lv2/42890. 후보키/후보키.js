const comb = [];
let isSuperSet = [];
let ans = 0;

function bt(n, i, m, cnt, acc) {
    if(n === i && m === cnt) {
        comb.push(acc);
        return;
    }
    if(n === i) return;
    bt(n, i+1, m, cnt+1, acc.concat([1]))
    bt(n, i+1, m, cnt, acc.concat([0]))
}

function isCandidate(relation, c) {
    const set = new Set();
    relation.forEach(r => {
        const cur = r.filter( (_, i) => c[i]).join('_');
        set.add(cur);    
    })
    return set.size === relation.length;
}

function checkSuperSet(ii) {
    const cur = comb[ii];
    for(let i=ii; i<comb.length; i++) {
        let cur_ = cur.map((el, j) => el && !comb[i][j])
        const check = cur_.every(el => !el);
        if(check) isSuperSet[i] = true;
    }
}

function solution(relation) {
    const [n,m] = [relation.length, relation[0].length];
    for(let i=1; i<=m; i++) bt(m, 0, i, 0, []);
    isSuperSet = new Array(comb.length).fill(false);

    for(let i=0; i<comb.length; i++) {
        if(isSuperSet[i]) continue;
        if(isCandidate(relation, comb[i])) {
            ans++;
            checkSuperSet(i);
        }
    }
    
    return ans;
}