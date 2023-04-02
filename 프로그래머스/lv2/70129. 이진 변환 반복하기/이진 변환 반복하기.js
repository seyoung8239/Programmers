let cnt = 0;
let zero = 0;

function bt(s) {
    const n = s.length;
    const m = [...s].filter(el => +el).length;
    
    cnt++;
    zero += n - m;
    
    if(m >= 2) bt(m.toString(2));
}

function solution(s) {
    bt(s);
    return [cnt, zero]
}