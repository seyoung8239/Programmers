function solution(b, y) {
    const rt = Math.sqrt((b+4)**2-16*(y+b));
    const rc = [(b+4-rt)/4, (b+4+rt)/4];
    rc.sort((a,b)=>b-a);
    return rc;
}