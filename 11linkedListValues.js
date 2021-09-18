/*
linked list values
Write a function, linkedListValues, that takes in the head of a linked list as an argument. 
The function should return an array containing all values of the nodes in the linked list.

test_00:
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

linkedListValues(a); // -> [ 'a', 'b', 'c', 'd' ]
test_01:
const x = new Node("x");
const y = new Node("y");

x.next = y;

// x -> y

linkedListValues(x); // -> [ 'x', 'y' ]
 */

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

//iterate time o(n), space o(n)
const linkedListValues = (head) => {
  let result = [];
  let current = head; 
  
  while (current !== null) {
    result.push(current.val);
    current = current.next; 
  }
  return result;
};

//recursive time o(n), space o(n)
const linkedListValues = (head) => {
  let result = [];
  _linkedListValues(head, result);
  return result;
}

const _linkedListValues = (head, values) => {
  if (head === null) return;
  values.push(head.val)
  _linkedListValues(head.next, values);
}
//
const x = new Node("x");
const y = new Node("y");

x.next = y;

// x -> y

linkedListValues(x); // -> [ 'x', 'y' ]