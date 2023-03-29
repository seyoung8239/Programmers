function solution(relation) {
    const [row, col] = [relation.length, relation[0].length];
    const ansList = [];
    const minimalList = [];
    
    for(let i=1; i<(1<<col); i++) {
        const set = new Set();
        for(let j=0; j<row; j++) {
            let uniq = "";
            for(let k=0; k<col; k++) {
                if(i & (1<<k))
                    uniq += relation[j][k];
            }
            set.add(uniq);
        }
        if(set.size === row && isMinimal(i, ansList)) ;
    }
    
    function isMinimal(cur, list) {
        for(let i=0; i<list.length; i++) {
            if((list[i] & cur) === list[i]) return false;
        }
        list.push(cur);
        return true;
    }
    
    return ansList.length;
}