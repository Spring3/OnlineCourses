function createNode(key) {
  const children = [];

  return {
    key,
    children,
    addChild(childKey) {
      const childNode = createNode(childKey);
      children.push(childNode);
      return childNode;
    }
  }
}

function createTree(rootKey) {
  const root = createNode(rootKey);

  return {
    root
  }
}

module.exports = { createTree };
