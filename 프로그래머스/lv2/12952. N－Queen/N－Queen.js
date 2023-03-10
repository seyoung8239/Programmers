let ans =0;
let n;

function isVal(x, y) {
    if(x>=0 && x<n && y>=0 && y<n) return true;
    return false;
}
function bt(cnt, check) {
    if(cnt === n) {ans++; return;}
    for(let i=0; i<n; i++) {
        if(!check[cnt][i]) continue;
        const c = check.map(el=>[...el]);
        let [x, y] = [cnt, i];
        while(isVal(++x, y))
            c[x][y] = false;
        [x, y] = [cnt, i];
        while(isVal(++x, --y))
            c[x][y] = false;
        [x, y] = [cnt, i];
        while(isVal(++x, ++y))
            c[x][y] = false;
        
        bt(cnt+1, c);
    }
}

function solution(_n) {
    n = _n;
    bt(0, new Array(n).fill(0).map(()=>new Array(n).fill(true)))
    return ans;
}