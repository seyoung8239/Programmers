function solution(n)
{
    let ans =0;
    while(n) {
        while(!(n%2)) n /= 2;
        n--;
        ans++;
    }
    
    return ans;
}