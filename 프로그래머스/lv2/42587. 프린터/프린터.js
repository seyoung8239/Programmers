function solution(priorities, location) {
    const pTable = [...priorities];
    pTable.sort((a, b)=> b-a);
    let ans = 0;
    
    while(1) {
        let cnt = -1;
        while(1) {
            cnt++;
            if(priorities[0] === pTable[0]) {
                priorities.shift();
                pTable.shift();
                ans++;
                if(cnt === location) return ans;
                continue;
            }
            
            // unshift -> push
            priorities.push(priorities.shift());
            if(cnt === location) {
                location = priorities.length-1;
                break;
            }
        }    
    }
}