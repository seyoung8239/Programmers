function solution(n, t, m, p) {
    let cnt = t * m;
    let s = "";
    for(let i=0; i<cnt; i++)
        s += i.toString(n).toUpperCase();
    return [...s].filter((_,i)=> i%m === p-1).slice(0, t).join('');
}