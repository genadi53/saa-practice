class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex = null) {
    if (vertex !== null && !this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1 = null, vertex2 = null, weight = 0) {
    if (vertex1 !== null && vertex2 !== null && vertex1 !== vertex2) {
      this.adjacencyList[vertex1].push({ node: vertex2, weight });
      this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }
  }
}

const graph = new WeightedGraph();
const vertices = [
  "LA",
  "Boston",
  "Tokyo",
  "London",
  "Sofia",
  "Berlin",
  "Sidney",
];
for (let v of vertices) graph.addVertex(v);

graph.addEdge("LA", "Boston", 10);
graph.addEdge("LA", "Tokyo", 3);
// graph.addEdge("London", "Berlin");
// graph.addEdge("London", "Sofia");
// graph.addEdge("London", "Boston");
// graph.addEdge("Tokyo", "Sidney");

console.log(graph.adjacencyList);
