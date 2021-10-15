/*
tree sum
Write a function, treeSum, that takes in the root of a binary tree that contains number values. The function should return the total sum of all values in the tree.

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

treeSum(a); // -> 21
 */
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}


//breathFirstSearch time o(n^2) because shift() is o(n)
const treeSum = (root) => {
 let sum = 0; 
  if (root === null) return 0; 
  let queue = [root];
  
  while(queue.length > 0) {
    let current = queue.shift();
    let curVal = current.val;
    sum += curVal; 
    
    if(current.left) queue.push(current.left);
    if(current.right) queue.push(current.right);
  }
  return sum;
};
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
console.log(treeSum(a))