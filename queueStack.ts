export class QueueStack {
    public queue: Array<number>;

    constructor() {
        this.queue = [];
    }

    push(num:number) {
        this.queue.push(num);
    }

    pop() {        
        let val = this.queue[this.queue.length - 1];
        if (this.queue.length > 1) {
            this.queue = this.queue.slice(0, this.queue.length - 1);
        } else {
            this.queue = [];
        }
        return val;
    }

    peek() {
        return this.queue.length ? this.queue[this.queue.length - 1] : null;
    }

    empty() {
        return !this.queue.length;
    }
}