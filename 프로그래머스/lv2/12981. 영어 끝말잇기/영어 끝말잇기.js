function solution(n, words) {
    const wordSet = new Set();
    let turn = 1;
    let cnt = 1;
    let success = false;
    
    let prev = words[0].at(-1);
    wordSet.add(words[0]);
    
    for(let i=1; i<words.length; i++) {
        if(cnt === n) {
            turn++;
            cnt = 0;
        } 
        cnt++;
        if(wordSet.has(words[i])) return [cnt, turn];
        if(prev !== words[i].at(0)) return [cnt, turn];
        wordSet.add(words[i]);
        prev = words[i].at(-1);
    }

    return [0, 0];
}