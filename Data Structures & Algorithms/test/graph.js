const assert = require('assert');
const { createGraph } = require('../src/graph.js');

describe('Graph', () => {
  it('should expose a factory function that generates a graph', () => {
    assert.equal(typeof createGraph, 'function');
    const graph = createGraph();
    assert(graph);
    assert.equal(typeof graph, 'object');
    assert(Array.isArray(graph.nodes));
    assert(Array.isArray(graph.edges));
    assert.equal(graph.isDirected, false);
    assert.equal(typeof graph.addNode, 'function');
    assert.equal(typeof graph.getNode, 'function');
    assert.equal(typeof graph.addEdge, 'function');
  });

  it('should take the isDirected parameter', () => {
    const graph = createGraph(true);
    assert.equal(graph.isDirected, true);
  });

  describe('Graph.addNode', () => {
    it('should add node to graph', () => {
      const graph = createGraph();
      assert.equal(graph.nodes.length, 0);
      graph.addNode('Node 1');
      assert.equal(graph.nodes.length, 1);
      graph.addNode('Node 2');
      assert.equal(graph.nodes.length, 2);
    });
  });

  describe('Graph.getNode', () => {
    it('should find and return the node from graph', () => {
      const graph = createGraph();
      graph.addNode('Node 1');
      graph.addNode('Node 2');
      graph.addNode('Node 3');
      assert.equal(graph.nodes.length, 3);
      const node = graph.getNode('Node 1');
      assert.equal(typeof node, 'object');
      assert.equal(node.key, 'Node 1');
      assert.equal(node.neighbors.length, 0);
      assert.equal(typeof node.addNeighbor, 'function');
    });

    it('should return null if a node was not found', () => {
      const graph = createGraph();
      const node = graph.getNode('Test');
      assert.equal(node, null);
    });
  });

  describe('Graph.addEdge', () => {
    it('should connect two nodes with and edge bidirectionally if graph is not directed', () => {
      const graph = createGraph();
      graph.addNode('Node 1');
      graph.addNode('Node 2');
      const node1 = graph.getNode('Node 1');
      const node2 = graph.getNode('Node 2');
      graph.addEdge('Node 1', 'Node 2');

      assert(graph.edges.includes('Node 1 -> Node 2'));
      assert.equal(node1.neighbors.length, node2.neighbors.length);
      assert.equal(node1.neighbors.length, 1);
    });

    it('should not do anything if node(s) don\'t exist in the graph', () => {
      const graph = createGraph();
      graph.addEdge('Node1', 'Node2');
      assert.equal(graph.nodes.length, 0);
      assert.equal(graph.getNode('Node1'), null);
      assert.equal(graph.getNode('Node2'), null);
    });

    it('should not add connect nodes bidirectionally if the graph is directed', () => {
      const graph = createGraph(true);
      graph.addNode('Node 1');
      graph.addNode('Node 2');
      const node1 = graph.getNode('Node 1');
      const node2 = graph.getNode('Node 2');
      graph.addEdge('Node 1', 'Node 2');
      assert(graph.edges.includes('Node 1 -> Node 2'));
      
      assert.equal(node1.neighbors.length, 1);
      assert.equal(node2.neighbors.length, 0);
    });
  });

  describe('Graph.breadthFirstSearch', () => {
    it('should find the target node', () => {
      const graph = createGraph(true);
      graph.addNode('a');
      graph.addNode('b');
      graph.addNode('c');
      graph.addNode('d');
      graph.addNode('e');
      graph.addNode('f');

      /*
          a------>b<----c
          | \    | \    ^    
          |  \   |  \   |
          |    \ |   \  |
          v     vv     v|
          f      e<-----d
      */
      graph.addEdge('a', 'b');
      graph.addEdge('a', 'f');
      graph.addEdge('a', 'e');
      graph.addEdge('b', 'e');
      graph.addEdge('b', 'd');
      graph.addEdge('d', 'e');
      graph.addEdge('d', 'c');
      graph.addEdge('c', 'b');

      const expectedRoute = ['a', 'b', 'f', 'e', 'd', 'c'];
      const route = [];

      graph.breadthFirstSearch('a', (node) => {
        route.push(node.key);
      });
      assert.deepEqual(route, expectedRoute);
    });
  });
});
