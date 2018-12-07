const assert = require('assert');
const { createStack } = require('../src/stack.js');

describe('Stack', () => {
  it('should expose a factory function that should generate a stack', () => {
    assert.equal(typeof createStack, 'function');
    const stack = createStack();
    assert(stack instanceof Object);
    assert(!Array.isArray(stack));
    assert.equal(typeof stack.push, 'function');
    assert.equal(typeof stack.pop, 'function');
    assert.equal(typeof stack.peek, 'function');
    assert.equal(typeof stack.length, 'number');
    assert.equal(typeof stack.isEmpty, 'function');
  });

  describe('Stack.isEmpty', () => {
    it('should show the correct status of stack', () => {
      const stack = createStack();
      assert(stack.isEmpty());
      stack.push('test');
      assert(!stack.isEmpty());
    });
  });

  describe('Stack.length', () => {
    it('should return the amoutn of items in stack', () => {
      const stack = createStack();
      assert.equal(stack.length, 0);
      stack.push('test');
      assert.equal(stack.length, 1);
    });

    it('should not set', () => {
      const stack = createStack();
      stack.length = 20;
      assert.equal(stack.length, 0);
    });
  });

  describe('Stack.push', () => {
    it('should add the item to the end of the stack', () => {
      const stack = createStack();
      stack.push('test');
      assert(!stack.isEmpty());
    });
  });

  describe('Stack.peek', () => {
    it('should return the item from the top of the stack', () => {
      const stack = createStack();
      assert.equal(stack.peek(), null);

      stack.push('test');
      assert.equal(stack.peek(), 'test');

      stack.push('test1');
      assert.equal(stack.peek(), 'test1');

      stack.push(undefined);
      assert.equal(stack.peek(), undefined);
    });
  });

  describe('Stack.pop', () => {
    it('should remove and return the top element of the stack', () => {
      const stack = createStack();
      const items = ['item1', 'item2', 'item3'];
      for (const item of items) {
        stack.push(item);
      }
      assert.equal(stack.pop(), 'item3');
      assert.equal(stack.pop(), 'item2');
      assert.equal(stack.pop(), 'item1');
      assert.equal(stack.pop(), null);
    });
  });
});
