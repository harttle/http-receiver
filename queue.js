class Queue {
    constructor (size) {
        this.size = size || 10;
        this.data = [];
    }
    push (item) {
        this.data.push(item);
        while (this.data.length > this.size) {
            this.pop();
        }
    }
    pop () {
        return this.data.shift();
    }
    all () {
        return this.data;
    }
}

module.exports = Queue;
