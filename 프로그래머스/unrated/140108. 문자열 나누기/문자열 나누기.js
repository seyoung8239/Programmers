function solution(_s) {
    const s = _s.split('');
    
    let s0, cnt, ans = 0;

    for(let i=0; i<s.length; i++) {
        let s0 = s[i];
        let cnt = 1;
        while(cnt) {
            if(++i===s.length) break;
            if(s[i] === s0) cnt++;
            else cnt--;
        }
        ans++;
    }
    return ans;
}