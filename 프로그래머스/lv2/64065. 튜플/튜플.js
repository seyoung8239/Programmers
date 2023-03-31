function solution(s) {
    const tupleRegExp = /\{([\w, \,]+)\}/g
    let res = [...s.matchAll(tupleRegExp)]
        .map(el => el[1].split(',').map(el => +el));
    res.sort((a,b)=> a.length - b.length);
    
    const n = res.at(-1).length;
    res = res.flat();
    
    const table = [];
    const ans = [];
    res.forEach(el => table[el] = table[el] ? table[el]+1 : 1);
    
    for(let i=1; i<table.length; i++) {
        if(!table[i]) continue;
        ans[n-table[i]] = i;
    }
    
    return ans;
}