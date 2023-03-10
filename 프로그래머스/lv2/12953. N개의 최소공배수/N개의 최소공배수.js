function solution(arr) {
    const lcm = (a, b) => {
        let [aa, bb, t] = [a,b];
        while(b>0) {
            t = b;
            b = a % b
            a = t
        }
        return (aa*bb)/t
    }
    return arr.reduce(lcm);
}