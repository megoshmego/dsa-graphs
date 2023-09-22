class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  addVertex(vertex) {
    this.nodes.add(vertex);
  }

  addVertices(vertexArray) {
    for (const vertex of vertexArray) {
      this.addVertex(vertex);
    }
  }

  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  removeVertex(vertex) {
    for (const node of this.nodes) {
      node.adjacent.delete(vertex);
    }
    this.nodes.delete(vertex);
  }

  depthFirstSearch(start) {
    const visited = new Set();
    const result = [];

    function dfs(node) {
      if (!visited.has(node)) {
        visited.add(node);
        result.push(node.value);

        for (const adjacent of node.adjacent) {
          dfs(adjacent);
        }
      }
    }

    dfs(start);
    return result;
  }

  breadthFirstSearch(start) {
    const visited = new Set();
    const result = [];
    const queue = [start];

    while (queue.length) {
      const node = queue.shift();
      if (!visited.has(node)) {
        visited.add(node);
        result.push(node.value);

        for (const adjacent of node.adjacent) {
          if (!visited.has(adjacent)) {
            queue.push(adjacent);
          }
        }
      }
    }

    return result;
  }
}

module.exports = { Graph, Node };
