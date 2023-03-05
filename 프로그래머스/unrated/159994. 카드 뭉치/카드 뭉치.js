function solution(cards1, cards2, goal) {
    let idx1 = 0, idx2 = 0;
    let n1 = cards1.length, n2 = cards2.length;
    
    for(let i=0; i<goal.length; i++) {
        if(idx1 === n1 && idx2 === n2) return "No";
        
        const curCard = goal[i];
        if(cards1[idx1] === curCard) idx1++;
        else if(cards2[idx2] === curCard) idx2++;
        else return "No";
    }
    return "Yes";
}