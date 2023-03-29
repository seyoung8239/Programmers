function solution(skill, skill_trees) {
    return skill_trees.reduce((acc, cur) => {
        let isVal = true;
        let l = 0;
        for(let i=0; i<cur.length; i++) {
            if(cur[i] === skill[l]) {
                l++;
                continue;
            }
            const idx = skill.indexOf(cur[i]);
            if(idx === -1) continue;
            if(idx > l) {
                isVal = false;
                break;
            }
        }
        
        return acc + (isVal ? 1 : 0);
    }, 0)
}