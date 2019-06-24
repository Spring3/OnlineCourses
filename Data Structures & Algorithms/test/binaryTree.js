const expect = require('expect.js');
const { createBinaryTree } = require('../src/binaryTree');

describe('Binary Tree', () => {
  it('should expose all the necessary set of properties', () => {
    expect(createBinaryTree).to.be.ok();
    const tree = createBinaryTree('root');
    expect(tree.root).to.be.ok();
    expect(tree.root.key).to.be('root');
    expect(tree.root.left).to.be(null);
    expect(tree.root.right).to.be(null);
    expect(typeof tree.root.addLeft).to.be('function');
    expect(typeof tree.root.addRight).to.be('function');
  });

  it('should traverse the tree IN_ORDER', () => {
    const tree = createBinaryTree('a');
    const b = tree.root.addLeft('b');
    const c = tree.root.addRight('c');
    const d = b.addLeft('d');
    const e = b.addRight('e');
    const h = d.addLeft('h');
    const i = d.addRight('i');
    const f = c.addLeft('f');
    const g = c.addRight('g');

    expect(tree.print()).to.be('h -> d -> i -> b -> e -> a -> f -> c -> g');
  });

  it('should traverse the tree PRE_ORDER', () => {
    const tree = createBinaryTree('a');
    const b = tree.root.addLeft('b');
    const c = tree.root.addRight('c');
    const d = b.addLeft('d');
    const e = b.addRight('e');
    const h = d.addLeft('h');
    const i = d.addRight('i');
    const f = c.addLeft('f');
    const g = c.addRight('g');

    expect(tree.print('PRE_ORDER')).to.be('a -> b -> d -> h -> i -> e -> c -> f -> g');
  });

  it('should traverse the tree POST_ORDER', () => {
    const tree = createBinaryTree('a');
    const b = tree.root.addLeft('b');
    const c = tree.root.addRight('c');
    const d = b.addLeft('d');
    const e = b.addRight('e');
    const h = d.addLeft('h');
    const i = d.addRight('i');
    const f = c.addLeft('f');
    const g = c.addRight('g');

    expect(tree.print('POST_ORDER')).to.be('h -> i -> d -> e -> b -> f -> g -> c -> a');
  });

  it('should invert the tree', () => {
    const tree = createBinaryTree('a');
    const b = tree.root.addLeft('b');
    const c = tree.root.addRight('c');
    const d = b.addLeft('d');
    const e = b.addRight('e');
    const h = d.addLeft('h');
    const i = d.addRight('i');
    const f = c.addLeft('f');
    const g = c.addRight('g');

    const visualisation = tree.print();
    tree.invert();
    expect(tree.print()).to.be(visualisation.split(' -> ').reverse().join(' -> '))
  });
});
