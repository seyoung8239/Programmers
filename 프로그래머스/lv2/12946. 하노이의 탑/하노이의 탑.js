function hanoi(n, from, to, mid) {
    if(n === 2) 
        return [[from, mid], [from, to], [mid, to]];
    if(n === 1)
        return [[from, to]];
    return [...hanoi(n-1, from, mid, to), [from, to], ...hanoi(n-1, mid, to, from)];
}

function solution(n) {
    return hanoi(n, 1, 3, 2)
}