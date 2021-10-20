/*
tree path finder
Write a function, pathFinder, that takes in the root of a binary tree and a target value. The function should return an array representing a path to the target value. If the target value is not found in the tree, then return null.

You may assume that the tree contains unique values.

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

pathFinder(a, 'e'); // -> [ 'a', 'b', 'e' ]
 */

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

//dfs recursive time o(n^2) space o(n)
// const pathFinder = (root, target) => {
//   if (root === null) return null; 
//   if (root.val === target) return [root.val];

//   const leftPath = pathFinder(root.left, target);
//   // console.log('leftPath', leftPath, 'rootLeft--', root.left)
//   if (leftPath !== null) {
//     return [root.val, ...leftPath];
//   }
//   const rightPath = pathFinder(root.right, target);
//   // console.log('rightPath', rightPath, 'rootRight--', root.right)
//   if (rightPath !== null) {
//     return [root.val, ...rightPath];
//   }
//   return null;
// };

const pathFinderHelper = (root, target) => {
  if (root === null) return null; 
  if (root.val === target) return [root.val];

  const leftPath = pathFinderHelper(root.left, target);
   console.log('leftPath--', leftPath)
  if (leftPath !== null){
   leftPath.push(root.val);
   console.log('leftPath--inside', leftPath)
   return leftPath;
  }

  const rightPath = pathFinderHelper(root.right, target);
  console.log('rightPath--', rightPath)
    if (rightPath !== null){
      rightPath.push(root.val)
        console.log('rightPath--inside', rightPath)
      return rightPath;
    }
    return null; 
  }

  const pathFinder = (root, target) => {
    const result = pathFinderHelper(root, target);
    console.log(result)
    if (result === null){
      return null; 
    } 
    return result.reverse();
  }
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

console.log(pathFinder(a, 'e')); // -> [ 'a', 'b', 'e' ]