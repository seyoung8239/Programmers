function solution(citations) {
    const m = Math.max(...citations);
    let al = new Array(m+1).fill(0);
    citations.forEach(c => al[c] = al[c] ? al[c]+1 : 1);

    al = al.reduceRight((acc, cur, i)=> {
        if(i === al.length-1)
            acc.unshift(cur);
        else
            acc.unshift(cur ? acc[0] + cur : acc[0])
        
        return acc;
    }, []);
    
    for(let i=m; i>=0; i--) 
        if(al[i] >= i) return i;
}