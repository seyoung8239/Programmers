function solution(nums) {
    const n = nums.length;
    const sum = nums.reduce((acc, cur)=> acc+cur, 0);
    const primes = new Array(sum+2).fill(true);
    primes[0] = false, primes[1] = false;
    for(let i=2; i<primes.length; i++) {
        if(!primes[i]) continue;
        let j = 2;
        while(i * j < primes.length) {
            primes[i*j] = false;
            j++;
        } 
    }
    
    let ans = 0;
    
    for(let i=0; i<n-2; i++) {
        for(let j=i+1; j<n-1; j++) {
            for(let k=j+1; k<n; k++) {
                const cur = nums[i] + nums[j] + nums[k];
                if(primes[cur]) {ans++; console.log(i+j+k)}
            }
        }
    }
    return ans;
}