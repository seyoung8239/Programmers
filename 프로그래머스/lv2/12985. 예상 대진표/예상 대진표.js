function solution(n,a,b)
{
    a--, b--
    let ans = 1;
    let share = 2;
    while(Math.floor(a/share) !== Math.floor(b/share)) {
        share *= 2;
        ans++;
    }

    return ans;
}