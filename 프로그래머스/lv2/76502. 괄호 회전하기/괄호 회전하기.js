const isVal = (str) => {
    const stk = [];
    for(let i=0; i<str.length; i++) {
        const s = str[i];
        if( s === '(' || s === '{' || s === '[') {
            stk.push(s);
            continue;
        }
        
        if(s === ')') {
            if(stk.at(-1) !== '(') return false;
            else {
                stk.pop(); 
                continue;
            }
        } else if(s === '}') {
            if(stk.at(-1) !== '{') return false;
            else {
                stk.pop(); 
                continue;
            }
        } else if(s === ']') {
            if(stk.at(-1) !== '[') return false;
            else {
                stk.pop(); 
                continue;
            }
        }
    }
    if(stk.length) return false;
    return true;
}

function solution(_str) {
    const str = [..._str];
    let ans = 0;
    
    for(let i=0; i<str.length; i++) {
        if(isVal(str)) ans++;
        str.push(str.shift());
    }
    return ans;
}