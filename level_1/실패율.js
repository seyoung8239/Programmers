function solution(N, stages) {
    const failList = new Array(N + 1).fill(0);
    stages.forEach((s) => failList[s - 1]++);

    const failRatioList = failList.reduceRight(
        (acc, cur, i) => {
            acc.cnt += cur;
            if (i !== N) acc.list.unshift(cur / acc.cnt);
            return acc;
        },
        { cnt: 0, list: [] }
    ).list;

    const idxBindedList = failRatioList.map((el, i) => ({
        stage: i + 1,
        ratio: el,
    }));

    idxBindedList.sort((a, b) => b.ratio - a.ratio);
    return idxBindedList.map((el) => el.stage);
}
