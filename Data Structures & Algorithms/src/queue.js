function createQueue() {
  const queue = [];
  return {
    enqueue(item) {
      queue.push(item);
    },
    dequeue() {
      return queue.shift();
    },
    get length() {
      return queue.length;
    },
    peek() {
      if (this.length > 0) {
        return queue[0];
      }
      return null;
    },
    isEmpty() {
      return this.length === 0;
    }
  }
}

module.exports = { createQueue };
