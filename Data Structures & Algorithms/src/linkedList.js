function createNode(value) {
  return {
    value,
    next: null
  };
}

function createLinkedList() {
  return {
    head: null,
    tail: null,
    length: 0,
    push(item) {
      const node = createNode(item);

      if (!this.head) {
        this.head = node;
        this.tail = node;
        this.length ++;
        return node;
      }

      this.tail.next = node;
      this.tail = node;
      this.length ++;
      return node;
    },
    pop() {
      if (this.isEmpty()) {
        return null;
      }

      const lastNode = this.tail;

      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
        this.length = 0;
        return lastNode;        
      }

      let currentNode = this.head;
      while (currentNode.next !== this.tail) {
        currentNode = currentNode.next;
      }

      currentNode.next = null;
      this.tail = currentNode;
      this.length --;
      return lastNode;
    },
    get(i) {
      if (this.isEmpty() || i < 0 || i >= this.length) {
        return null;
      }

      if (i === 0) {
        return this.head;
      }

      if (i === this.length - 1) {
        return this.tail;
      }

      let pointer = this.head;
      let j = 0;
      while(j < i) {
        pointer = pointer.next;
        j++;
      }

      return pointer;
    },
    delete(i) {
      if (this.isEmpty() || i < 0 || i >= this.length) {
        return null;
      }

      if (i === 0) {
        const deleted = this.head;
        if (this.head === this.tail) {
          this.head = null;
          this.tail = null;
        } else {
          this.head = this.head.next;
        }
        this.length --;
        return deleted;
      }

      let target = this.head;
      let previous;
      let j = 0;
      while (j < i) {
        previous = target;
        target = target.next;
        j++;
      }

      // target is being removed
      previous.next = target.next;

      // if target was a tail
      if (previous.next === null) {
        this.tail = previous;
      }

      this.length --;
      return target;

    },
    isEmpty() {
      return this.length === 0;
    }
  }
}

module.exports = { createLinkedList };
