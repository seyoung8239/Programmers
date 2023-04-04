function solution(n, k) {    
    let ans = 0;
    const a =n.toString(k);
    const tokens = [...a.matchAll(/[1-9]+/g)]
        .filter(el => el[0] !== '1')
        .map(el => +el[0])
        .forEach(el => {
            for(let i=2; i<=Math.sqrt(el); i++)
                if(!(el % i)) return;
            ans++;
        })

    return ans;
}