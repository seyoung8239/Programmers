function solution(_number, k) {
    let number = [..._number].reverse();
    let ans = [];
    const n = _number.length - k;
    
    while(k && number.length) {
        const cur = number.pop();
        while(ans.at(-1) < cur && k) {
            ans.pop();
            k--;
        }
        ans.push(cur);
    }
    
    if(k) ans.splice(-k)

    return ans.concat(number.reverse()).join('');
}