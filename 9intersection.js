/*
intersection
Write a function, intersection, that takes in two arrays, a,b, as arguments. 
The function should return a new array containing elements that are in both of the two arrays.

You may assume that each input array does not contain duplicate elements.

test_00:
intersection([4,2,1,6], [3,6,9,2,10]) // -> [2,6]
test_01:
intersection([2,4,6], [4,2]) // -> [2,4]
 */
//using set 
//time o(n + m), space O(min(n, m))
const intersection = (a, b) => {
  let set = new Set();
  let intersected = [];

  for (let num of a) {
    set.add(num)
  }
 
  for (let num of b) {
    if (set.has(num)) intersected.push(num);
  }
  return intersected;
  // console.log(set)
}

console.log(intersection([4,2,1,6], [3,6,9,2,10]));