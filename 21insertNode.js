/*
insert node
Write a function, insertNode, that takes in the head of a linked list, a value, and an index. The function should insert a new node with the value into the list at the specified index. Consider the head of the linked list as index 0. The function should return the head of the resulting linked list.

Do this in-place.

You may assume that the input list is non-empty and the index is not greater than the length of the input list.

test_00:
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

insertNode(a, 'x', 2);
// a -> b -> x -> c -> d
 */

const insertNode = (head, value, index) => {
  let current = head; 
  let newNode = new Node(value);

  if (index === 0){
    newNode.next = head.next;
    return newNode; 
  }

  let count = 0; 
  while (current !== null){
    if (count === index -1){
      let temp = current.next; 
      current.next = newNode;  
      newNode.next = temp; 
    }
    current = current.next; 
    count ++;
  }
  return head; 
}

//recursive time o(n), space o(n)
const insertNode = (head, value, index, count = 0) => {
  let newNode = new Node(value);
  if (index === 0){
    newNode.next = head; 
    return newNode; 
  }

  if (count === index -1) {
    let temp = head.next; 
    head.next = newNode; 
    newNode.next = temp;
    return head;
  }

  insertNode(head.next, value, index, count + 1);
  return head; 
}