function solution(n) {
    const threshold = 1_000_000_007
    
    const arr = [0, 1, 2];
    for(let i=3; i<=n; i++)
        arr[i] = (arr[i-1] + arr[i-2])%threshold
    
    return arr[n];
}