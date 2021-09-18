/*
Write a function, getNodeValue, that takes in the head of a linked list and an index. The function should return the value of the linked list at the specified index.

If there is no node at the given index, then return null.

test_00:
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

getNodeValue(a, 2); // 'c'
 */

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }


//iterate time o(n) space o(1);
const getNodeValue = (head, index) => {
  let current = head; 
  let count = 0; 
  while (current !== null){
    if (count === index) return current.val; 
    current = current.next;
    count++;
  }
  return null;
};

//recursive time o(n), space o(n)
const getNodeValue = (head, index) => {
  if (head === null) return null;
  if (index === 0) return head.val; 
  return getNodeValue(head.next, index - 1)
}