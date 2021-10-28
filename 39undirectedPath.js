/*
undirected path
Write a function, undirectedPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB). The function should return a boolean indicating whether or not there exists a path between nodeA and nodeB.

test_00:
const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];

undirectedPath(edges, 'j', 'm'); // -> true
 */

//bfs iterative time o(e), space o(n)
const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  return hasPath(graph, nodeA, nodeB, new Set())
};

const hasPath = (graph, nodeA, nodeB, visited) => {
  if (nodeA === nodeB) return true; 
  if (visited.has(nodeA)) return false;
  visited.add(nodeA)
  for (let neighbor of graph[nodeA]){
    if (hasPath(graph, neighbor, nodeB, visited)) return true; 
  }
  return false;
}
const buildGraph = (edges) => {
  const graph = {};
  for (let edge of edges){
    let [a, b] = edge;
   
    if (!graph[a]) graph[a] =[];
    if (!graph[b]) graph[b] =[];
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
}
const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];

console.log(undirectedPath(edges, 'j', 'm')); // -> true