function solution(queue1, queue2) {
    const sum1 = queue1.reduce((acc, cur) => acc+cur);
    const sum2 = queue2.reduce((acc, cur) => acc+cur);
    const arr = [...queue1, ...queue2];
    const target = (sum1+sum2)/2;
    
    let sum = sum1;
    let pointer1 = 0, pointer2 = queue1.length - 1;
    for(let cnt=0; cnt<arr.length*2; cnt++) {
        if(sum === target) return cnt;
        sum < target ?
            sum += arr[++pointer2] :
            sum -= arr[pointer1++];
    }
    return -1;
}