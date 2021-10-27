/*
leaf list
Write a function, leafList, that takes in the root of a binary tree and returns an array containing the values of all leaf nodes in left-to-right order.

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

leafList(a); // -> [ 'd', 'e', 'f' ] 
 */

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

//dfs iterative time o(n), space o(n)
const leafList = (root) => {
  if (root === null) return [];
  let levels = [];
  let stack = [{node: root, level: 0}];
  
  while (stack.length > 0){
    let {node, level} = stack.pop();
    if (levels.length === level) {
      levels[level] = [node.val];
    } else {
      levels[level].push(node.val)
    }
    if (node.right !== null) stack.push({node: node.right, level: level + 1});
    if (node.left !== null) stack.push({node: node.left, level: level + 1})
  }
  return levels[levels.length - 1];
};

//dfs recursive time o(n), space o(n)
const leafList = (root) => {
  const levels = [];
  _leafList(root, levels)
  return levels;
}

const _leafList = (root, levels) => {
  if (root === null) return; 
  if (root.left === null && root.right === null) levels.push(root.val);
  _leafList(root.left, levels);
  _leafList(root.right, levels);
}

////
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
const g = new Node("g");
const h = new Node("h");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;
//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /       \
//   g         h
console.log(leafList(a)) // -> [ 'd', 'g', 'h' ]
