function solution(str) {
    return str
        .split(' ')
        .map(s=>s.toLowerCase())
        .map(s=> s ? s[0].toUpperCase() + s.slice(1) : "")
        .join(' ')
}