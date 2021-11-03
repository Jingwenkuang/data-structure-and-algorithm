/*
shortest path
Write a function, shortestPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB). The function should return the length of the shortest path between A and B. Consider the length as the number of edges in the path, not the number of nodes. If there is no path between A and B, then return -1.

test_00:
const edges = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v']
];

shortestPath(edges, 'w', 'z'); // -> 2
 */
// { w: [ 'x', 'v' ],
//   x: [ 'w', 'y' ],
//   y: [ 'x', 'z' ],
//   z: [ 'y', 'v' ],
//   v: [ 'z', 'w' ] }
//bfs time o(e), space o(e) where e is the # of edges
const shortestPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  let queue = [[nodeA, 0]];
  let visited = new Set([nodeA]);

  while(queue.length) {
    let [node, distance] = queue.shift();
    // console.log('queue', queue);
    // console.log('visited', visited)
    if (node === nodeB) return distance;

    for (let neighbor of graph[node]){   
      // console.log('neighbor', neighbor)
      if (!visited.has(neighbor)){
        visited.add(neighbor);
        queue.push([neighbor, distance + 1])
      }
    }
  }
};

const buildGraph = (edges) => {
  let graph = {};

  for (let edge of edges){
    const [a, b] = edge; 
    if (!graph[a]) graph[a] =[];
    if (!graph[b]) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
}
const edges = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v']
];

console.log(shortestPath(edges, 'w', 'z')); // -> 2