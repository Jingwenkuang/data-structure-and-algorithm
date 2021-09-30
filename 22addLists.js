/*
add lists
Write a function, addLists, that takes in the head of two linked 
lists, each representing a number. The nodes of the linked lists 
contain digits as values. The nodes in the input lists are reversed; 
this means that the least significant digit of the number is the head. 
The function should return the head of a new linked listed representing the sum of the input lists. The output list should have it's digits reversed as well.

Say we wanted to compute 621 + 354 normally. The sum is 975:

   621
 + 354
 -----
   975

Then, the reversed linked list format of this problem would appear as:

    1 -> 2 -> 6
 +  4 -> 5 -> 3
 --------------
    5 -> 7 -> 9
test_00:
//   621
// + 354
// -----
//   975

const a1 = new Node(1);
const a2 = new Node(2);
const a3 = new Node(6);
a1.next = a2;
a2.next = a3;
// 1 -> 2 -> 6

const b1 = new Node(4);
const b2 = new Node(5);
const b3 = new Node(3);
b1.next = b2;
b2.next = b3;
// 4 -> 5 -> 3

addLists(a1, b1);
// 5 -> 7 -> 9
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}


const addLists = (head1, head2) => {
  let dummyHead = new Node (null);
  let tail = dummyHead; 
  let current1 = head1; 
  let current2 = head2; 

  let carry = 0; 
  while (current1 !== null || current2 !== null || carry !== 1){
    let val1 = current1 === null ? 0 : current1.val;
    let val2 = current2 === null ? 0 : current2.val;
    let sum = val1 + val2 + carry; 
    carry = sum > 9 ? 1 : 0; 
    let digit = sum % 10; 
    tail.next = new Node (digit);

    if (current1 !== null) current1 = current1.next; 
    if (current2 !== null) current2 = current2.next; 

    tail = tail.next; 
  }
  return dummyHead.next;
};

//recrusive time o(max(n, m)), space o(max(n, m))
const addLists = (head1, head2, carry = 0) => {
  if (head1 === null && head2 === null && carry === 0) return 0; 

  let val1 = head1 === null ? 0 : head1.val;
  let val2 = head2 === null ? 0 : head2.val;
  let sum = val1 + val2 + carry; 
  let nextCarry = sum > 9 ? 1 : 0; 
  let digit = sum % 10; 
  let result = new Node (digit);

  let next1 = head1 === null ? null : head1.next; 
  let next2 = head2 === null ? null : head2.next; 

  result.next = addLists(next1, next2, nextCarry);
  return result; 
}