/*
bottom right value
Write a function, bottomRightValue, that takes in the root of a binary tree. The function should return the right-most value in the bottom-most level of the tree.

You may assume that the input tree is non-empty.

test_00:
const a = new Node(3);
const b = new Node(11);
const c = new Node(10);
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
//   11     10
//  / \      \
// 4   -2     1

bottomRightValue(a); // -> 1
 */

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}


//bfs time o(n^2) because of shift(); space o(n)
const bottomRightValue = (root) => {
  let queue = [root];
  let temp = root.val;
  while (queue.length > 0) {
    let current = queue.shift();
    temp = current.val;
    // console.log(temp)
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return temp;
};

const a = new Node(3);
const b = new Node(11);
const c = new Node(10);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

console.log(bottomRightValue(a))