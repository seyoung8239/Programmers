function solution(files) {
    const fileRegExp = /^([a-zA-Z \.-]+)(\d{1,5})(.*)$/
    files = files.map(f => f.match(fileRegExp).slice(1,4))
    files.sort((a,b)=> {
        if(a[0].toLowerCase() !== b[0].toLowerCase())
            return a[0].toLowerCase().localeCompare(b[0].toLowerCase());
        if(+a[1] !== +b[1])
            return +a[1] - +b[1];
        return 0;
    })

    return files.map(f => f.join(''));
}