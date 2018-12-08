const assert = require('assert');
const { createLinkedList } = require('../src/linkedList.js');

describe('LinkedList', () => {
  it('should expose the factory function that generates the linkedList', () => {
    assert.equal(typeof createLinkedList, 'function');
    const linkedList = createLinkedList();
    assert(linkedList instanceof Object);
    assert(!Array.isArray(linkedList));
    assert.equal(linkedList.head, null);
    assert.equal(linkedList.tail, null);
    assert.equal(linkedList.length, 0);
    assert.equal(typeof linkedList.push, 'function');
    assert.equal(typeof linkedList.pop, 'function');
    assert.equal(typeof linkedList.get, 'function');
    assert.equal(typeof linkedList.delete, 'function');
    assert.equal(typeof linkedList.isEmpty, 'function');
  });

  describe('LinkedList.push', () => {
    it('should add the node to the end of the list', () => {
      const linkedList = createLinkedList();
      linkedList.push('test');
      linkedList.push('test1');
      linkedList.push('test2');
      assert.equal(linkedList.length, 3);
      assert.equal(linkedList.get(2).value, 'test2');
      linkedList.push('test3');
      assert.equal(linkedList.get(3).value, 'test3');
    });
  });

  describe('LinkedList.pop', () => {
    it('should remove and return the last item of the list', () => {
      const linkedList = createLinkedList();
      const items = ['test', 'test1', 'test2', 'test3', 'test4'];
      for (const item of items) {
        linkedList.push(item);
      }

      for (let i = 0; i < items.length; i++) {
        assert.equal(linkedList.pop().value, items[items.length - 1 - i]);
        assert.equal(linkedList.length, items.length - 1 - i);
      }
      assert.equal(linkedList.head, null);
      assert.equal(linkedList.tail, null);
    });

    it('should return without any problems from the list of 1 item', () => {
      const linkedList = createLinkedList();
      assert.equal(linkedList.pop(), null);
      linkedList.push('test');
      assert.equal(linkedList.pop().value, 'test');
      assert.equal(linkedList.head, null);
      assert.equal(linkedList.tail, null);
    });
  });

  describe('LinkedList.get', () => {
    it('should find and return the item from the list', () => {
      const linkedList = createLinkedList();
      assert.equal(linkedList.get(0), null);
      assert.equal(linkedList.get(20), null);
      const items = ['test', 'test1', 'test2', 'test3', 'test4'];
      for (const item of items) {
        linkedList.push(item);
      }

      for (let i = 0; i < items.length; i ++) {
        assert.equal(linkedList.get(i).value, items[i]);
      }
    });
  });

  describe('LinkedList.delete', () => {
    it('should find and remove the item from the list', () => {
      const linkedList = createLinkedList();
      const items = ['test', 'test1', 'test2', 'test3', 'test4'];
      for (const item of items) {
        linkedList.push(item);
      }
      assert.equal(linkedList.length, items.length);
      assert(linkedList.delete(1).value, items[1]);
      assert.equal(linkedList.length, items.length - 1);
      assert.equal(linkedList.get(1).value, items[2]);
      assert.equal(linkedList.delete(100), null);
    });

    it('should delete the first element without any problem', () => {
      const linkedList = createLinkedList();
      const items = ['test', 'test1', 'test2', 'test3', 'test4'];
      for (const item of items) {
        linkedList.push(item);
      }

      assert.equal(linkedList.length, items.length);
      let i = 0;
      while (!linkedList.isEmpty()) {
        assert.equal(linkedList.delete(0).value, items[i++]);
      }
      assert.equal(linkedList.length, 0);
      assert.equal(linkedList.head, null);
      assert.equal(linkedList.tail, null);
    });

    it('should delete the last element without any problem', () => {
      const linkedList = createLinkedList();
      const items = ['test', 'test1', 'test2', 'test3', 'test4'];
      for (const item of items) {
        linkedList.push(item);
      }

      assert.equal(linkedList.length, items.length);
      let i = items.length - 1;
      while (!linkedList.isEmpty()) {
        assert.equal(linkedList.delete(linkedList.length - 1).value, items[i--]);
      }
      assert.equal(linkedList.length, 0);
      assert.equal(linkedList.head, null);
      assert.equal(linkedList.tail, null);
    });
  });

  describe('LinkedList.isEmpty', () => {
    it('should return the correct state of the list', () => {
      const linkedList = createLinkedList();
      assert(linkedList.isEmpty());
      linkedList.push('test');
      assert(!linkedList.isEmpty());
      linkedList.pop();
      assert(linkedList.isEmpty());
    });
  });
});
