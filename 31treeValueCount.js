/*
tree value count
Write a function, treeValueCount, that takes in the root of a binary tree and a target value. The function should return the number of times that the target occurs in the tree.

test_00:
const a = new Node(12);
const b = new Node(6);
const c = new Node(6);
const d = new Node(4);
const e = new Node(6);
const f = new Node(12);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      12
//    /   \
//   6     6
//  / \     \
// 4   6     12

treeValueCount(a,  6); // -> 3
 */

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

//bfs time o(n^2) because of shift o(n), space o(n)
// const treeValueCount = (root, target) => {
//   let count = 0; 
//   if (root === null) return 0; 
  
//   let queue = [root];
//   while (queue.length > 0) {
//     let current = queue.shift();
//     let curVal = current.val; 
//     if (curVal === target) count ++; 
    
//     if (current.left) queue.push(current.left);
//     if (current.right) queue.push(current.right);
//     // console.log('current--', current, 'left--', current.left, 'right--', current.right)
//   }
//   return count; 
// };

//dfs recursive time o(n), space o(n);
const treeValueCount = (root, target) => {
  if (root === null) return 0; 
  const match = root.val === target ? 1 : 0; 
  // console.log('match--', match, 'left--', root.left, 'right--', root.right)
  return match + treeValueCount(root.left, target) + treeValueCount(root.right, target)
}

const a = new Node(12);
const b = new Node(6);
const c = new Node(6);
const d = new Node(4);
const e = new Node(6);
const f = new Node(12);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
console.log(treeValueCount(a, 12))