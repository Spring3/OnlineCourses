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
    assert.equal(typeof priorityQueue.length, 'function');
    assert.equal(typeof priorityQueue.isEmpty, 'function');
  });

  describe('PriorityQueue.isEmpty', () => {

  });

  describe('PriorityQueue.enqueue', () => {

  });

  describe('PriorityQueue.dequeue', () => {

  });

  describe('PriorityQueue.peek', () => {

  });
});
