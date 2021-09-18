/*
remove node
Write a function, removeNode, that takes in the head of a linked list and a target value as arguments. The function should delete the node containing the target value from the linked list and return the head of the resulting linked list. If the target appears multiple times in the linked list, only remove the first instance of the target in the list.

Do this in-place.

You may assume that the input list is non-empty.

test_00:
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// a -> b -> c -> d -> e -> f

removeNode(a, "c");
// a -> b -> d -> e -> f
 */

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

//iterate time o(n), space o(1)
const removeNode = (head, targetVal) => {
  let current = head; 
  let previous = null; 

  if (head.val === targetVal) return head.next; 

  while (current !== null){
    if (current.val === targetVal){
      let temp = current.next; 
      previous.next = temp;
      break;
    }
    previous = current; 
    current = current.next; 
  }
  return head; 
};

//recursive time o(n), space o(n)
const removeNode = (head, targetVal) => {
  if (head === null) return null;
  if (head.val === targetVal) return head.next; 
  head.next = removeNode(head.next, targetVal);
  return head; 
}