function solution(n) {
    const fiv = [0, 1];
    for(let i=2; i<=n; i++)
        fiv[i] = (fiv[i-1]+fiv[i-2])%1234567
    return fiv[n];
}