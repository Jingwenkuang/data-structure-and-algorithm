/*
tree min value
Write a function, treeMinValue, that takes in the root of a binary tree that contains number values. The function should return the minimum value within the tree.

You may assume that the input tree is non-empty.

test_00:
const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

treeMinValue(a); // -> -2
 */

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

//dfs time o(n), space 0(n)
const treeMinValue = (root) => {

  let min = Infinity; 
  let stack = [root];
  
  while (stack.length > 0){
    let current = stack.pop();
    let value = current.val; 
    
    if(value < min) min = value; 
    if(current.right) stack.push(current.right);
    if(current.left) stack.push(current.left);
  }
  return min;
};

//recursive time o(n), space o(n)
const treeMinValue = (root) => {
  if (root === null) return Infinity; 
  return Math.min(root.val, treeMinValue(root.left), treeMinValue(root.right))
}

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

console.log(treeMinValue(a)); // -> -2