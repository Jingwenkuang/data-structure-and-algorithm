/*
Write a function, depthFirstValues, that takes in the root of a binary tree. 
The function should return an array containing all values of the tree in depth-first order.

test_00:
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

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

depthFirstValues(a); 
//    -> ['a', 'b', 'd', 'e', 'c', 'f']
 */
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
//iterate time o(n), space o(n)
// const depthFirstValues = (root) => {
//   if (root === null) return [];

//   let result = [];
//   let stack = [root];
//   while(stack.length > 0){
//     let current = stack.pop();
//     result.push(current.val);

//     if (current.right) stack.push(current.right);
//     if (current.left) stack.push(current.left);
//     console.log(stack)
//   }
//   return result;
// }


//recursive time o(n), space o(n)
const depthFirstValues = (root) => {
  if (root === null) return [];
  let leftVal = depthFirstValues(root.left);
  console.log('left' + leftVal)
  let rightVal = depthFirstValues(root.right);
  console.log('right' + rightVal)
  return [root.val, ...leftVal, ...rightVal];
}
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

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

console.log(depthFirstValues(a)); 