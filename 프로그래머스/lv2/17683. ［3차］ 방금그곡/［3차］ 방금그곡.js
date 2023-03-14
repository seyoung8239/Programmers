const flatRegExp = /([A-G]#)/g;

function solution(m, _musicinfos) {
    const musicinfos = initInfo(_musicinfos);    
    m = m.replaceAll(flatRegExp, (m)=>m[0].toLowerCase());
    for(let i=0; i<musicinfos.length; i++) {
        if(musicinfos[i][1].match(m)) return musicinfos[i][0];
    }
        
    return "(None)"
}

function initInfo(musicinfos) {
    const m = musicinfos.map(m => {
        const mList = m.split(',');
        let [st, et, title, sheet] = mList;
        sheet = sheet.replaceAll(flatRegExp, (m)=>m[0].toLowerCase());
        const [sh, sm] = st.split(':');
        const [eh, em] = et.split(':');
        const dh = +eh - sh;
        const dm = dh*60 + +em - sm;
        
        const songLength = sheet.length;
        const [share, remainder] = [dm / songLength, dm % songLength];
        
        const playedNote = sheet.repeat(share) + sheet.slice(0, remainder);
        return [title, playedNote];
    })
    m.sort((a, b)=> b[1].length-a[1].length)
    return m;
}