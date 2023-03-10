function getMaxDivisor(n) {
    if(n === 1) return 0;
    const cand = [];
    for(let i=2; i<=Math.sqrt(n); i++) {
        // if(!(n % i) && (n/i) > 10_000_000) return 1;
        // if(!(n % i) && (n/i) <= 10_000_000) return n/i;
        if(!(n % i)) {
            if((n/i) <= 10_000_000) return n/i;
            cand.push(i);
        }
    }
     
    if(cand.length) return Math.max(...cand);
    return 1;
    
}

function solution(begin, end) {
    const arr = []
    for(let i=begin; i<=end; i++)
        arr.push(getMaxDivisor(i))
    
    return arr;
}