function solution(arr1, arr2) {
    let n = arr1.length, m = arr2[0].length, c = arr2.length;
    const mat = new Array(n).fill().map(()=>new Array(m).fill(0));
    
    for(let i=0; i<n; i++) {
        for(let j=0; j<m; j++) {
            for(let k=0; k<c; k++) {
                mat[i][j] += arr1[i][k] * arr2[k][j];
            }
        }
    }
    
    return mat;
}