function createNode(key) {
  return {
    key,
    left: null,
    right: null,
    addLeft(leftKey) {
      const leftNode = createNode(leftKey);
      this.left = leftNode;
      return leftNode;
    },
    addRight(rightKey) {
      const rightNode = createNode(rightKey);
      this.right = rightNode;
      return rightNode;
    }
  }
}

const Traversals = {
  IN_ORDER: (node, visitFn) => {
    if (node !== null) {
      Traversals.IN_ORDER(node.left, visitFn);
      visitFn(node);
      Traversals.IN_ORDER(node.right, visitFn);
    }
  },
  PRE_ORDER: (node, visitFn) => {
    if (node !== null) {
      visitFn(node);
      Traversals.PRE_ORDER(node.left, visitFn);
      Traversals.PRE_ORDER(node.right, visitFn);
    }
  },
  POST_ORDER: (node, visitFn) => {
    if (node !== null) {
      Traversals.POST_ORDER(node.left, visitFn);
      Traversals.POST_ORDER(node.right, visitFn);
      visitFn(node);
    }
  }
}

function invertTree(node) {
  if (node !== null) {
    const left = invertTree(node.left);
    const right = invertTree(node.right);
    node.left = right;
    node.right = left;
    return node;
  }
  return null;
}

function createBinaryTree(rootKey) {
  const root = createNode(rootKey);
  return {
    root,
    print(traversal = 'IN_ORDER') {
      let result = '';
      const visit = node => {
        result += result.length === 0
          ? node.key
          : ` -> ${node.key}`;
      };
      
      Traversals[traversal](this.root, visit);
      return result;
    },
    invert() {
      return invertTree(this.root);
    }
  };
}

module.exports = { createBinaryTree };
