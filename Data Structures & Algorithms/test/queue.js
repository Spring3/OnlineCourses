const assert = require('assert');
const { createQueue } = require('../src/queue.js');

describe('Queue', () => {
  it('should expose a factory function', () => {
    assert.equal(typeof createQueue, 'function');
  });

  it('should create a new queue', () => {
    let queue;
    assert.doesNotThrow(() => {
      queue = createQueue();
    }, Error);

    assert(queue instanceof Object);
    assert(!Array.isArray(queue));
    assert.equal(typeof queue.enqueue, 'function');
    assert.equal(typeof queue.dequeue, 'function');
    assert.equal(typeof queue.peek, 'function');
    assert.equal(typeof queue.isEmpty, 'function');
  });

  describe('Queue.isEmpty', () => {
    it('should return a correct boolean state of the queue', () => {
      const queue = createQueue();
      assert.equal(queue.isEmpty(), true);
      queue.enqueue(null);
      assert.equal(queue.isEmpty(), false);
    });
  });

  describe('Queue.enqueue', () => {
    it('should add an item to the end of queue', () => {
      const queue = createQueue();
      assert(queue.isEmpty());

      const items = ['item1', 'item2'];
      for (const item of items) {
        queue.enqueue(item);
        assert.equal(queue.isEmpty(), false);  
      }
    });
  });

  describe('Queue.dequeue', () => {
    it('should remove the first item from the queue', () => {
      const queue = createQueue();
      
      const items = ['person1', 'person2', 'person3'];
      for (const item of items) {
        queue.enqueue(item);
      }

      assert.equal(queue.dequeue(), items[0]);
      assert.equal(queue.dequeue(), items[1]);
      assert.equal(queue.dequeue(), items[2]);
      assert.equal(queue.dequeue(), null);
    });
  });

  describe('Queue.peek', () => {
    it('should return the next item to be dequeued', () => {
      const queue = createQueue();
      const items = ['person1', 'person2', 'person3'];
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        queue.enqueue(item);
        assert.equal(queue.peek(), items[0]);
      }
      
      for (let i = 0; i < items.length; i++) {
        assert.equal(queue.peek(), items[i]);
        queue.dequeue();
      }

      assert.equal(queue.peek(), null);
    });
  });
});
