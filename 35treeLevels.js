/*
tree levels
Write a function, treeLevels, that takes in the root of a binary tree. The function should return a 2-Dimensional array where each subarray represents a level of the tree.

test_00:
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

treeLevels(a); // ->
// [
//   ['a'],
//   ['b', 'c'],
//   ['d', 'e', 'f']
// ]
 */

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

//dfs time o(n), space o(n)
const treeLevels = (root) => {
  if(root === null) return [];
  const levels = [];
  const stack = [{node: root, levelNum: 0}];
  

  while (stack.length > 0) {
    const {node, levelNum} = stack.pop();
    if (levels.length === levelNum) {
      levels[levelNum] = [node.val]
    } else {
      levels[levelNum].push(node.val)
    }
    console.log('stack', stack)
    if (node.right !== null) stack.push({node: node.right, levelNum: levelNum + 1});
    if (node.left !== null) stack.push({node: node.left, levelNum: levelNum + 1});
  }
  return levels;
};


//dfs recrusive time o(n), space o(n)

const treeLevels = (root) => {
  const levels = [];
  _treeLevels(root, levels, 0)
  return levels; 
}

const _treeLevels = (root, levels, levelNum) => {
  if (root === null) return; 
  if (levels.length === levelNum){
    levels[levelNum] = [root.val];
  } else {
    levels[levelNum].push(root.val)
  }
  _treeLevels(root.left, levels, levelNum+1);
  _treeLevels(root.right, levels, levelNum+1);
}

//bfs time o(n^2), space o(n)
// const treeLevels = (root) => {
//   if (root === null) return [];
//   const levels = [];
//   const queue = [{node: root, levelNum: 0}];
  
//   while (queue.length > 0) {
//     let {node, levelNum} = queue.shift();
//     if (levels.length === levelNum){
//       levels[levelNum] = [node.val];
//     } else {
//       levels[levelNum].push(node.val);
//     }
//     if (node.left !== null) queue.push({node: node.left, levelNum: levelNum + 1});
//     if (node.right !== null) queue.push({node: node.right, levelNum: levelNum + 1});
                                       
//   }
//   return levels;
// }

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

console.log(treeLevels(a))