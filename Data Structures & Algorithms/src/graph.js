function createNode(key) {
  const neighbors = [];
  return {
    key,
    neighbors,
    addNeighbor(node) {
      neighbors.push(node);
    }
  }
}

function createGraph(isDirected = false) {
  const nodes = [];
  const edges = [];
  return {
    isDirected,
    nodes,
    edges,
    addNode(key) {
      nodes.push(createNode(key));
    },
    getNode(key) {
      return nodes.find(node => node.key === key);
    },
    addEdge(node1Key, node2Key) {
      const node1 = this.getNode(node1Key);
      const node2 = this.getNode(node2Key);

      if (node1 && node2) {
        node1.addNeighbor(node2);
        edges.push(`${node1.key} -> ${node2.key}`);

        if (!this.isDirected) {
          node2.addNeighbor(node1);
        }
      }
    }
  }
}

module.exports = { createGraph };
