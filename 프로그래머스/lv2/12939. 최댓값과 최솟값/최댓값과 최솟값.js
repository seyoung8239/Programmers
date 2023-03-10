function solution(s) {
    return s.split(' ').reduce((acc, cur) => {
        acc[0] = Math.min(cur, acc[0]);
        acc[1] = Math.max(cur, acc[1]);
        return acc;
    }, [Infinity, -Infinity]).join(' ');
}