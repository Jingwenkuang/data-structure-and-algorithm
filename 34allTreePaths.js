/*
all tree paths
Write a function, allTreePaths, that takes in the root of a binary tree. The function should return a 2-Dimensional array where each subarray represents a root-to-leaf path in the tree.

The order within an individual path must start at the root and end at the leaf, but the relative order of among paths in the outer array does not matter.

You may assume that the input tree is non-empty.

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

allTreePaths(a); // ->
// [ 
//   [ 'a', 'b', 'd' ], 
//   [ 'a', 'b', 'e' ], 
//   [ 'a', 'c', 'f' ] 
// ] 
 */

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}


//recursive time o(n), space o(n)
const allTreePaths = (root) => {
  if(root === null) return [];
  if (root.left === null && root.right === null) return [[root.val]]

  const paths = [];
  const leftPath = allTreePaths(root.left);
  // console.log('leftPath', leftPath)
  for (let subPath of leftPath) {
    // console.log('beforeLeftpaths--', paths)
    paths.push([root.val, ...subPath])
    // console.log('afterLeftpaths--', paths)
    // console.log('leftsubpath--', subPath)
  }

  const rightPath = allTreePaths(root.right);
  // console.log('rightpath', rightPath)
  for (let subPath of rightPath){
    // console.log('beforeRIGHTpaths--', paths)
    paths.push([root.val, ...subPath])
    // console.log('afterRightPath---', paths)
    // console.log('rightsubpath--', subPath)
  }
  return paths; 
};

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
console.log(allTreePaths(a))