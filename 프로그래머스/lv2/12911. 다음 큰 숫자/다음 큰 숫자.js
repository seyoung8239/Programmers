function get1cnt(arr) {
    return [...arr.toString(2)].reduce((acc, cur) => +cur ? acc+1 : acc, 0)
}

function solution(n) {
    const cnt = get1cnt(n);
    do {
        n++;  
    } while(get1cnt(n) !== cnt)
    return n;
}