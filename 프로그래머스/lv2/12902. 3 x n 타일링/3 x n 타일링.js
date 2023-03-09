function solution(n) {
    let arr = [1, 3]
    const threshold = 1_000_000_007
    for(let i=2; i<=n/2; i++) {
        arr[i] =
            (arr.reduce((acc, cur)=>acc + 2*cur, 0) + arr[i-1]) % threshold
    }
    return arr[n/2];
}