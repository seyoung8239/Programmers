function solution(queue1, queue2) {
    const arr = queue1.concat(queue2);
    const target = arr.reduce((acc, cur)=>acc+cur)/2;
    let sum = 0, j = 0;
    const ans = [];
    for(let i=0; i<arr.length; i++) {
        for(; j<arr.length; j++) {
            sum += arr[j];
            if(sum === target) {
                const mv = i+j-queue1.length+1;
                if(mv >= 0) ans.push(mv)
                else ans.push(arr.length+mv);
            };
            if(sum > target) {
                sum -= arr[j];
                break;  
            }
        }
        sum -= arr[i];
    }
    const answer = Math.min(...ans);
    
    if(ans.length && answer < arr.length*2) return answer;
    return -1;
}