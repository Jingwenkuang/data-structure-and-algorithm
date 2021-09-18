/*
is univalue list
Write a function, isUnivalueList, that takes in the head of a linked list 
as an argument. The function should return a boolean indicating whether or 
not the linked list contains exactly one unique value.

You may assume that the input list is non-empty.

test_00:
const a = new Node(7);
const b = new Node(7);
const c = new Node(7);

a.next = b;
b.next = c;

// 7 -> 7 -> 7

isUnivalueList(a); // true
 */

//iterate time o(n), space o(1)
//comparing the head.val vs current.val
const isUnivalueList = (head) => {
  let current = head; 
  while (current !== null) {
    if (current.val !== head.val) return false;
    current = current.next;
  }
  return true; 
};


//recursive, time o(n), space o(n)
const isUnivalueList = (head, preVal = null) => {
  if (head === null) return true; 
  if (preVal === null || head.val === preVal) {
    return isUnivalueList(head.next, head)
  } else {
    return false;
  }
}