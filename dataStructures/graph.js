class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex = null) {
    if (vertex !== null && !this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1 = null, vertex2 = null) {
    if (vertex1 !== null && vertex2 !== null && vertex1 != vertex2) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    }
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  dfsRecursive(startVertex) {
    let result = [];
    let visited = {};
    const adjacencyList = this.adjacencyList;

    const dfs = function (vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) return dfs(neighbor);
      });
    };
    dfs(startVertex);
    return result;
  }

  dfsIterative(start) {
    const stack = [];
    let result = [];
    let visited = {};
    let currentVertex;

    stack.push(start);
    visited[start] = true;

    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }

  bfs(start) {
    const queue = [];
    let result = [];
    let visited = {};
    let currentVertex;

    queue.push(start);
    visited[start] = true;

    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}

const graph = new Graph();
const vertices = [
  "LA",
  "Boston",
  "Tokyo",
  "London",
  "Sofia",
  "Berlin",
  "Sidney",
];
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

// graph.addEdge("LA", "Boston");
// graph.addEdge("LA", "Tokyo");
// graph.addEdge("London", "Berlin");
// graph.addEdge("London", "Sofia");
// graph.addEdge("London", "Boston");
// graph.addEdge("Tokyo", "Sidney");

//graph.removeEdge("LA", "Tokyo");
//graph.removeVertex("London");
console.log(graph.dfsRecursive("A"));
console.log(graph.dfsIterative("A"));
console.log(graph.bfs("A"));
