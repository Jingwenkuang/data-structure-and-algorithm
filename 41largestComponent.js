/*
largest component
Write a function, largestComponent, that takes in the adjacency list of an undirected graph. The function should return the size of the largest connected component in the graph.

test_00:
largestComponent({
  0: ['8', '1', '5'],
  1: ['0'],
  5: ['0', '8'],
  8: ['0', '5'],
  2: ['3', '4'],
  3: ['2', '4'],
  4: ['3', '2']
}); // -> 4
 */

//dfs time o(e), space o(n)
const largestComponent = (graph) => {
  let visited = new Set();
  let largest = 0; 

  for (let node in graph) {
    console.log('node', node)
    exploreSize(node, graph, visited)
  }
};

const exploreSize = (currentNode, graph, visited) => {
  if (visited.has(currentNode)) return 0; 
  visited.add(currentNode);
  console.log('visited', visited)
  let size = 1; 
  for (let neighbor of graph[currentNode]) {
    console.log('neighbor', neighbor);
    console.log('size', size)
    size += exploreSize(neighbor, graph, visited)
  }
  return size;
}
console.log(largestComponent({
  0: ['8', '1', '5'],
  1: ['0'],
  5: ['0', '8'],
  8: ['0', '5'],
  2: ['3', '4'],
  3: ['2', '4'],
  4: ['3', '2']
})); // -> 4