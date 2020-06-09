import { QueueStack } from './queueStack';

describe('Queue Stack', () => {
    let q;

    beforeEach(() => {
        q = new QueueStack();
        for (var i = 0; i < 11; i++) {
            q.push(i);
        }
    });
    it('should be able to push', () => {
        expect(q.queue).toEqual([0,1,2,3,4,5,6,7,8,9,10]);
    });

    it('should pop correctly', () => {
        expect(q.pop()).toEqual(10);
        expect(q.queue).toEqual([0,1,2,3,4,5,6,7,8,9]);
    });

    it('should peek', () => {
        expect(q.peek()).toEqual(10);
    });

    it('should return correct empty status', () => {
        expect(q.empty()).toEqual(false);
        for (var i = 0; i < 11; i++) {
            q.pop();
        }
        expect(q.empty()).toEqual(true);
    });
});