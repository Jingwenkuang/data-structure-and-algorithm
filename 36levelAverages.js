/*
level averages
Write a function, levelAverages, that takes in the root of a binary tree that contains number values. The function should return an array containing the average value of each level.

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

levelAverages(a); // -> [ 3, 7.5, 1 ] 
 */

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
//dfs recursive time o(n), space o(n)
const levelAverages = (root) => {
  let levels = [];
  _levelAverages(root, levels, 0)
  
  let averages = [];
  for (let subLevel of levels) {
    averages.push(subAverage(subLevel))
  }
  return averages;
};

const _levelAverages = (root, levels, levelsNum) => {
  if (root === null) return; 
  if (levels.length === levelsNum) {
    levels[levelsNum] = [root.val]
  } else {
    levels[levelsNum].push(root.val)
  }
  _levelAverages(root.left, levels, levelsNum + 1);
  _levelAverages(root.right, levels, levelsNum + 1);
}

const subAverage = (array) => {
  let sum = 0; 
  for (let subArr of array) {
    sum += subArr;
  }
  return sum / array.length ; 
}

//dfs time o(n), space o(n)
const levelAverages = (root) => {
  if (root === null) return [];
  const levels = [];
  const stack = [{node: root, levelNum: 0}];
  
  while(stack.length > 0) {
    const {node, levelNum} = stack.pop();
    if (levels.length === levelNum) {
      levels[levelNum] = [node.val]
    } else {
      levels[levelNum].push(node.val)
    }
    if (node.right !== null) stack.push({node: node.right, levelNum: levelNum + 1})
    if (node.left !== null) stack.push({node: node.left, levelNum: levelNum + 1})
    
  }
    
  const avgs = [];
  for (let level of levels) {
    avgs.push(average(level))     
    }
  return avgs;
};


const average = (array) => {
  let sum = 0;
  for (let num of array) {
    sum += num;
  }
  return sum / array.length; 
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
console.log(levelAverages(a))