function solution(msg) {
    const ans = [];
    const dict = new Array(26).fill().map((_,i)=>String.fromCharCode(65+i));
    while(msg) {
        for(let i=dict.length-1; i>=0; i--) {
            if(msg.startsWith(dict[i])) {
                const l = dict[i].length;
                ans.push(i+1);
                dict.push(msg.slice(0, l+1))
                msg = msg.slice(l);
                break;
            }
        }
    }
    
    
    return ans;
}