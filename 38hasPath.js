/*
has path
Write a function, hasPath, that takes in an object representing the adjacency list of a directed acyclic graph and two nodes (src, dst). The function should return a boolean indicating whether or not there exists a directed path between the source and destination nodes.

test_00:
const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
};

hasPath(graph, 'f', 'k'); // true
 */


//bfs time o(e^2) space o(n), where e is the number of edges, shift o(n), and n is the number of nodes
// const hasPath = (graph, src, dst) => {
//   const queue = [src];

//   while (queue.length > 0) {
//     let current = queue.shift();
//     // console.log(`current -- ${current}`)
//     if (current === dst) return true;
//     for (let neighbor of graph[current]) {
//       queue.push(neighbor);
//       // console.log(`queue -- ${queue}`)
//     }
//   }
//   return false;
// };

//bfs recursive time o(e), space o(n)
const hasPath = (graph, src, dst) => {
  if (src === dst) return true; 

  for (let neighbor of graph[src]){
    console.log(`neighbor --- ${neighbor}`)
    if (hasPath(graph, neighbor, dst)) {
      console.log(`neighborAfter --- ${neighbor}`)
      return true;
    }
  }
  return false;
}

//dfs iterate time o(e), space o(n)
const hasPath = (graph, src, dst) => {
  const stack = [src];
  
  while (stack.length > 0) {
    let current = stack.pop();
    if (current === dst) return true; 
    for (let neighbor of graph[current]){
      stack.push(neighbor)
    }
  }
  return false;
}
///
const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
};

console.log(hasPath(graph, 'f', 'k')); // true