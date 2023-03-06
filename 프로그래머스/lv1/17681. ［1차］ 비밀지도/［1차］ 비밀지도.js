function solution(n, arr1, arr2) {
    return arr1.map((el,i) => [...'0'.repeat(n).concat((el|arr2[i]).toString(2)).slice(-n)].map(e => +e ? '#' : ' ').join(''))
}