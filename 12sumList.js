/*
sum list
Write a function, sumList, that takes in the head of a linked list containing numbers as an argument. The function should return the total sum of all values in the linked list.

test_00:
const a = new Node(2);
const b = new Node(8);
const c = new Node(3);
const d = new Node(-1);
const e = new Node(7);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

// 2 -> 8 -> 3 -> -1 -> 7

sumList(a); // 19
 */

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }


//iterate timeo(n), space o(1)
const sumList = (head) => {
  let sum = 0; 
  while (head !== null) {
    sum += head.val;
    head = head.next;
  }
  return sum;
};

//recursive time o(n)
//space o(n) because of the call stack, it takes up space
const sumList = (head) => {
  if (head === null) return 0; 
  return head.val + sumList(head.next)
}