/*

create linked list
Write a function, createLinkedList, that takes in an array of 
values as an argument. The function should create a linked list 
containing each element of the array as the values of the nodes. 
The function should return the head of the linked list.

test_00:
createLinkedList(["h", "e", "y"]);
// h -> e -> y
 */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

//iterate time o(n), space o(1)
const createLinkedList = (values) => {
  if (values.length === 0) return null; 
  let dummyHead = new Node(null); 
  let tail = dummyHead; 

  for (let val of values) {
    let node = new Node(val);
    tail.next = node; 
    tail = tail.next; 
  }
  return dummyHead.next; 
};

//recursive time o(n), space o(n)
const createLinkedList = (values) => {
  if (values.length === 0) return null;
  const head = new Node(values[0]);
  head.next = createLinkedList(values.slice(1))
  return head; 
}

//recursive time o(n), space o(n)
const createLinkedList = (values, i = 0) => {
  if (i === values.length) return null; 
  const head = new Node(values[i]);
  head.next = createLinkedList(values, i + 1);
  return head; 
}