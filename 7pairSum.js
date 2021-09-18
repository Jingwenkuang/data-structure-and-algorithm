/*
pair sum
Write a function, pairSum, that takes in an array and a target sum as arguments. 
The function should return an array containing a pair of indices whose elements 
sum to the given target. The indices returned must be unique.

Be sure to return the indices, not the elements themselves.

There is guaranteed to be one such pair that sums to the target.

test_00:
pairSum([3, 2, 5, 4, 1], 8); // -> [0, 2]
 */

//time o(n), space o(n);
//using hash map, and get the differernt between num of targetsum
function pairSum(numbers, targetSum) {
  let previous = {};

  for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    let complement = targetSum - num; 

    if (complement in previous) {
      return [previous[complement], i];
    }
    previous[num] = i;
    // console.log(previous)
  }
}

console.log(pairSum([3, 2, 5, 4, 1], 8))