function solution(people, limit) {
    people.sort((a,b)=>a-b);
    let ans = 0;
    let found = false;
    
    do {
        const cur = people[0];
        found = false;
        
        for(let i=people.length-1; i>0; i--) {
            const cur2 = people.pop();
            ans++;
            
            if(cur + cur2 <= limit) {
                found = true;
                people.shift();
                break;
            }
        }
    } while(people.length && found)
        
    ans += people.length;
    return ans;
}