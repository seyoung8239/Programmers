function solution(n) {
    let ans = 0;
    const arr = [0, ];
    for(let i=1; ; i++) {
        arr[i] = arr[i-1] + i;
        if(arr[i] === n) ans++;
        if(arr[i] >= n) break;
    }
    
    let k = arr.length-1;
    for(let i=2; i<=n; i++) {
        for(let j=k; j>0; j--){
            arr[j] += j;
            if(arr[j] === n) {
                ans++;
                k = j;
            }
        }
    }
    
    return ans;
}