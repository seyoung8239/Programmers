function solution(n) {
    let digits = [];
    while(n) {
        if(!(n % 3)) {
            digits.unshift(4)
            n = Math.floor((n/3)-1);
        } else {
            digits.unshift(n%3)
            n = Math.floor(n/3);
        }
    }
    return digits.join('')
}