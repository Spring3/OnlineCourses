const assert = require('assert');
const { createPriorityQueue } = require('../src/priorityQueue.js');

describe('PriorityQueue', () => {
  it('should expose a factory function that generates a priorityQueue', () => {
    assert(typeof createPriorityQueue, 'function');
    const priorityQueue = createPriorityQueue();
    assert(priorityQueue instanceof Object);
    assert(!Array.isArray(priorityQueue));
    assert.equal(typeof priorityQueue.enqueue, 'function');
    assert.equal(typeof priorityQueue.dequeue, 'function');
    assert.equal(typeof priorityQueue.peek, 'function');
    assert.equal(typeof priorityQueue.length, 'number');
    assert.equal(typeof priorityQueue.isEmpty, 'function');
  });

  describe('PriorityQueue.isEmpty', () => {
    it('should return the correct state of the queue', () => {
      const priorityQueue = createPriorityQueue();
      assert(priorityQueue.isEmpty());
      priorityQueue.enqueue('test');
      assert(!priorityQueue.isEmpty());
    });
  });

  describe('PriorityQueue.peek', () => {
    it('should return high priority items first', () => {
      const priorityQueue = createPriorityQueue();
      assert.equal(priorityQueue.peek(), null);
      priorityQueue.enqueue('basicItem');
      assert.equal(priorityQueue.peek(), 'basicItem');
      priorityQueue.enqueue('basicItem1');
      assert.equal(priorityQueue.peek(), 'basicItem');
      priorityQueue.enqueue('vipItem', true);
      assert.equal(priorityQueue.peek(), 'vipItem');
    });
  });

  describe('PriorityQueue.enqueue', () => {
    it('should enqueue high priority items at the beginning of the queue', () => {
      const priorityQueue = createPriorityQueue();
      priorityQueue.enqueue('testItem');
      assert.equal(priorityQueue.peek(), 'testItem');
      priorityQueue.enqueue('highPriorityItem', true);
      assert.equal(priorityQueue.peek(), 'highPriorityItem');
    });
  });

  describe('PriorityQueue.dequeue', () => {
    it('should dequeue high priority items at the beginning of the queue', () => {
      const priorityQueue = createPriorityQueue();
      priorityQueue.enqueue('testItem');
      priorityQueue.enqueue('highPriorityItem', true);
      priorityQueue.enqueue('highPriorityItem1', true);
      priorityQueue.enqueue('testItem1');

      assert.equal(priorityQueue.dequeue(), 'highPriorityItem');
      assert.equal(priorityQueue.dequeue(), 'highPriorityItem1');
      assert.equal(priorityQueue.dequeue(), 'testItem');
      assert.equal(priorityQueue.dequeue(), 'testItem1');
    });
  });

  describe('PriorityQueue.length', () => {
    it('should return the length of the priorityQueue', () => {
      const priorityQueue = createPriorityQueue();
      assert.equal(priorityQueue.length, 0);
      priorityQueue.enqueue('basicItem');
      assert.equal(priorityQueue.length, 1);
      priorityQueue.enqueue('vipItem', true);
      assert.equal(priorityQueue.length, 2);
      priorityQueue.enqueue('vipItem1', true);
      assert.equal(priorityQueue.length, 3);
    });

    it('should not set', () => {
      const priorityQueue = createPriorityQueue();
      priorityQueue.length = 20;
      assert.equal(priorityQueue.length, 0);
    });
  });
});
