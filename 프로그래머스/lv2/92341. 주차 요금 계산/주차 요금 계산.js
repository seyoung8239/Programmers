function solution(fees, _records) {
    const hour = '60';
    const [basicTime, basicFee, unitTime, unitFee] = fees;
    let records = new Map();
    _records.forEach(rec => {
        const [_time, key, io] = rec.split(' ');
        if(!records.has(key)) records.set(key, []);
        const [hh, mm] = _time.split(':')
        const time = +hh * hour + +mm;
        records.get(key).push(time);
    })
    
    records.forEach(rec => {
        if(rec.length % 2) rec.push(23 * hour + 59);
    });
    records = [...records.entries()];
    records.sort((a,b)=>+a[0]-+b[0]);
    return records.map(rec => {
        let time = -basicTime;
        while(rec[1].length) {
            const to = rec[1].pop();
            const from = rec[1].pop();
            time += to - from;
        }
        if(time < 0) return +basicFee;
        return +basicFee + Math.ceil(time / +unitTime) * +unitFee
    })
}