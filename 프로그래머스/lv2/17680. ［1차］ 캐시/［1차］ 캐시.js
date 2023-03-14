class LRU {
    cache = [];
    length;
    constructor(n) {
        this.length = n;
    }
    
    find(t) {
        for(let i=0; i<this.length; i++)
            if(this.cache[i] === t)
               return i;
        return -1;
    }
    
    remove(idx) {
        this.cache.splice(idx, 1);
    }
    deque() {
        this.cache.splice(0, 1);
    }
    push(t) {
        this.cache.push(t);
    }
    
    get(t) {
        const idx = this.find(t)
        if(idx === -1) {
            if(this.cache.length === this.length)
                this.deque();
            this.push(t);
            return false;
        }
        this.remove(idx);
        this.push(t);
        return true;
    }
}

function solution(cacheSize, cities) {
    const lru = new LRU(cacheSize);
    return cities.map(c => c.toLowerCase()).reduce((acc,cur) => lru.get(cur) ? acc+1 : acc+5, 0)
}