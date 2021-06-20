const airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(" ");

// undirected, not weighted graph with no cycles
// represented with adjacencyList
const routes = [
  ["PHX", "LAX"],
  ["PHX", "JFK"],
  ["JFK", "OKC"],
  ["JFK", "HEL"],
  ["JFK", "LOS"],
  ["MEX", "LAX"],
  ["MEX", "BKK"],
  ["MEX", "LIM"],
  ["MEX", "EZE"],
  ["LIM", "BKK"],
];

// the graph
const adjacencyList = new Map();

// add node
function addNode(airport) {
  adjacencyList.set(airport, []);
}

// add edge, undirected
function addEdge(origin, destination) {
  adjacencyList.get(origin).push(destination);
  adjacencyList.get(destination).push(origin);
}

// breadth-first search --> O(v + e) = (nodes + edges) = (n)
function bfs(start, searchedDestination) {
  const visited = new Set();
  const queue = [start];

  while (queue.length > 0) {
    const airport = queue.shift();
    const destinations = adjacencyList.get(airport);

    for (const destination of destinations) {
      if (destination === searchedDestination) {
        console.log("Found " + searchedDestination);
      }

      if (!visited.has(destination)) {
        visited.add(destination);
        queue.push(destination);
        console.log(destination);
      }
    }
  }
}

// depth-first search --> O(n)
function dfs(start, searchedDestination, visited = new Set()) {
  console.log(start);
  visited.add(start);

  const destinations = adjacencyList.get(start);

  for (const destination of destinations) {
    if (destination === searchedDestination) {
      console.log("Found " + searchedDestination);
      return;
    }

    if (!visited.has(destination)) {
      dfs(destination, searchedDestination, visited);
    }
  }
}

airports.forEach(addNode);
routes.forEach((route) => addEdge(...route));
console.log(adjacencyList);
dfs("PHX", "BKK");
bfs("PHX", "BKK");
