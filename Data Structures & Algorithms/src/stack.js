function createStack() {
  const stack = [];
  return {
    push(item) {
      stack.push(item);
    },
    pop() {
      return stack.pop();
    },
    peek() {
      return stack[stack.length - 1];
    },
    get length() {
      return stack.length;
    },
    isEmpty() {
      return stack.length === 0;
    }
  };
}

module.exports = { createStack }
