function solution(dartResult) {
    const scoreRegex = /(?<score>\d+)(?<bonus>[S|D|T])(?<option>[*|#])?/g;
    const bonusTable = {
        S: 1,
        D: 2,
        T: 3,
    };

    const calculateScore = (acc, cur) => {
        let total = 0;
        const [_, score, bonus, option] = cur;
        total = Math.pow(score, bonusTable[bonus]);
        switch (option) {
            case "*":
                acc[acc.length - 1] *= 2;
                total *= 2;
                break;
            case "#":
                total *= -1;
                break;
        }
        acc.push(total);
        return acc;
    };

    return [...dartResult.matchAll(scoreRegex)]
        .reduce(calculateScore, [])
        .reduce((acc, cur) => acc + cur, 0);
}
