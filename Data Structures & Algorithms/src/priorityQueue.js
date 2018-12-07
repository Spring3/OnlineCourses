const { createQueue } = require('./queue.js');

function createPriorityQueue() {
  const lowPriorityQueue = createQueue();
  const highPriorityQueue = createQueue();
  return {
    enqueue(item, highPriority) {
      if (highPriority) {
        highPriorityQueue.enqueue(item);
        return;
      }
      lowPriorityQueue.enqueue(item);
    },
    dequeue() {
      return highPriorityQueue.isEmpty()
        ? lowPriorityQueue.dequeue()
        : highPriorityQueue.dequeue();
    },
    peek() {
      if (this.isEmpty()) {
        return null;
      }

      return highPriorityQueue.isEmpty()
        ? lowPriorityQueue.peek()
        : highPriorityQueue.peek();
    },
    get length() {
      return lowPriorityQueue.length + highPriorityQueue.length;
    },
    isEmpty() {
      return lowPriorityQueue.isEmpty() && highPriorityQueue.isEmpty();
    }
  }
};

module.exports = { createPriorityQueue };
