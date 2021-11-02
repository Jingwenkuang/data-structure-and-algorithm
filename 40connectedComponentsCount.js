/*
connected components count
Write a function, connectedComponentsCount, that takes in the adjacency list of an undirected graph. The function should return the number of connected components within the graph.

test_00:
connectedComponentsCount({
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2]
}); // -> 2
 */

//dfs time o(e), space o(n) where e is the # of edges and n is the # of nodes

const connectedComponentsCount = (graph) => {
  let count = 0; 
  let visited = new Set();

  for (let node in graph){
   if (exploreNode(node, graph, visited)) count ++;    
  }
  console.log(visited, count)
  return count; 
};

const exploreNode = (node, graph, visited) => {
  if (visited.has(Number(node))) return false;
  visited.add(Number(node));

  for (let neighbor of graph[node]) {
  
    exploreNode(neighbor, graph, visited)
  }
  return true;
}
console.log(connectedComponentsCount({
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2]
})); // -> 2
