function solution(land) {
    const n = land.length;
    for(let i=1; i<n; i++) {
        land[i][0] += Math.max(land[i-1][1],land[i-1][2],land[i-1][3])
        land[i][1] += Math.max(land[i-1][0],land[i-1][2],land[i-1][3])
        land[i][2] += Math.max(land[i-1][0],land[i-1][1],land[i-1][3])
        land[i][3] += Math.max(land[i-1][0],land[i-1][1],land[i-1][2])
    }

    return Math.max(land[n-1][0],land[n-1][1],land[n-1][2],land[n-1][3])
}