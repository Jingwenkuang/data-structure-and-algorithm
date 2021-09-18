/*
longest streak
Write a function, longestStreak, that takes in the head of a linked list as 
an argument. The function should return the length of the longest consecutive 
streak of the same value within the list.

test_00:
const a = new Node(5);
const b = new Node(5);
const c = new Node(7);
const d = new Node(7);
const e = new Node(7);
const f = new Node(6);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// 5 -> 5 -> 7 -> 7 -> 7 -> 6

longestStreak(a); // 3
 */

const longestStreak = (head) => {
  let currentCount = 0; 
  let maxCount = 0; 
  let current = head; 
  let preval = null; 

  while (current !== null) {
    if (current.val === preval) {
      currentCount++;
    } else {
      currentCount = 1;
    }
    maxCount = Math.max(maxCount, currentCount);
    preval = current.val;
    current = current.next; 
  }
  return maxCount;
};