function solution(name) {
    let mNum = 0;
    
    let n = [...name].map((n,i)=> {
        if(n==='A') return 0;
        if(i) mNum++;
        return 1;
    }).join('');
    let mCnt = mNum;
    let nnn = n.repeat(2);
    let mArrLeft = new Array(mNum).fill(0);
    let mArrRight = new Array(mNum).fill(0);
    
    for(let i=n.length-1; i>0; i--)
        if(+nnn[i]) mArrLeft[--mNum] = n.length-i;
    mCnt = 0;
    for(let i=n.length+1; i<nnn.length; i++)
        if(+nnn[i]) mArrRight[mCnt++] = i-n.length;
    mArrLeft.push(0);
    mArrRight.unshift(0);
    const mArr = mArrLeft.map((el, i)=>
        el+mArrRight[i]+Math.min(el, mArrRight[i]))
    const distNum = Math.min(...mArr);
    
    let alphaNum = 0;
    const a = new Array(26).fill(0).map((el, i)=>String.fromCharCode(i+65));
    const aaa = a.join('').repeat(2);
    
    for(let i=0; i<n.length; i++) {
        if(name[i] === 'A') continue;
        left = a.length, right = a.length;
        for(let j=a.length-1; j>=0; j--)
            if(aaa[j] === name[i]) {
                left = a.length-j; 
                break;
            }
        for(let j=a.length+1; j<aaa.length; j++)
            if(aaa[j] === name[i]) {
                right = j-a.length; 
                break;
            }
        alphaNum += Math.min(left, right);
    }
    
    return distNum + alphaNum;
}