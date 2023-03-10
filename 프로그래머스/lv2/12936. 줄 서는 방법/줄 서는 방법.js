const factorial = [1, 1, ]

function setFactorial(n) {
    for(let i=2; i<n; i++)
        factorial[i] = i * factorial[i-1];
}

function solution(n, k) {
    const ans = [];
    k--;
    setFactorial(n);
    let arr = new Array(n).fill(0).map((_, i)=>i+1);
    for(let i=1; i<=n; i++) {
        const radix = factorial[n-i];
        const share = Math.floor(k / radix);
    
        k -= share * radix;
        ans.push(arr[share]);
        arr.splice(share, 1);
    }
    
    
    return ans;
}