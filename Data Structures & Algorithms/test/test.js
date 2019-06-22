const assert = require('assert');
const { createTree } = require('../src/tree');

describe('Tree', () => {
  it('should expose the necessary set of functions', () => {
    assert(createTree);
    const tree = createTree('root');
    assert.equal(typeof tree, 'object');
    assert.equal(typeof tree.root, 'object');
    assert.equal(tree.root.key, 'root');
    assert.deepEqual(tree.root.children, []);
    assert.equal(typeof tree.root.addChild, 'function');
  });

  it('should be able to add as many children to a node as needed', () => {
    const tree = createTree('html');
    const head = tree.root.addChild('head');
    head.addChild('title');
    head.addChild('meta');
    const body = tree.root.addChild('body');
    body.addChild('nav');
    body.addChild('main');
    body.addChild('footer');
    assert.equal(tree.root.key, 'html');
    assert.equal(tree.root.children.length, 2);
    assert.equal(tree.root.children[0].key, 'head');
    assert.equal(tree.root.children[0].children.length, 2);
    assert.equal(tree.root.children[0].children[0].key, 'title');
    assert.equal(tree.root.children[0].children[1].key, 'meta');
    assert.equal(tree.root.children[1].key, 'body');
    assert.equal(tree.root.children[1].children.length, 3);
    assert.equal(tree.root.children[1].children[0].key, 'nav');
    assert.equal(tree.root.children[1].children[1].key, 'main');
    assert.equal(tree.root.children[1].children[2].key, 'footer');
  });
});
