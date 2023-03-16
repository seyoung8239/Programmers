const allNum = new Set();

function bt(o, c, cnt) {
    if(!o.length) return;
    for(let i=0; i<o.length; i++) {
        bt(o.slice(0,i)+o.slice(i+1), c+o[i], cnt+1);
        allNum.add(+(c+o[i]));
    }
}

function solution(numbers) {
    bt(numbers, "", 0);
    const nl = [...allNum];
    const m = Math.max(...nl);
    const prime = new Array(m+1).fill(true);
    prime[0] = false, prime[1] = false;
    
    for(let i=2; i<=m; i++) {
        if(!prime[i]) continue;
        let j=1;
        while(i*(++j) <= m)
            prime[i*j] = false;
    }
    
    return nl.reduce((acc,cur)=> prime[cur] ? acc+1 : acc, 0);
}