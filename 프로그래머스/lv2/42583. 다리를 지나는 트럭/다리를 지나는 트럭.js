function solution(bridge_length, weight, truck_weights) {
    let bridge = [];
    let ans = 0;
    let curW = 0;
    
    while(truck_weights.length || bridge.length) {
        ans++;
        if(bridge.length) {
            bridge = bridge.map(t => [t[0], t[1]+1]);
            if(bridge[0][1] === bridge_length) {
                curW -= bridge[0][0];
                bridge.splice(0, 1);
            }
        }
        
        const nextT = truck_weights[0];
        if(!nextT) continue;
        if(curW + nextT > weight) continue;
        truck_weights.splice(0, 1);
        bridge.push([nextT, 0]);
        curW += nextT
    }
    
    return ans;
}