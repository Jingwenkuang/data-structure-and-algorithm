/*
anagrams
Write a function, anagrams, that takes in two strings as arguments. 
The function should return a boolean indicating whether or not the 
strings are anagrams. Anagrams are strings that contain the same characters, 
but in any order.

test_00:
anagrams('restful', 'fluster'); // -> true
test_01:
anagrams('cats', 'tocs'); // -> false
 */


//time o(n+m), space o(n), where n is the length of s1, m is the length of s2. 

const anagrams = (s1, s2) => {
  const count = {};

  for (let char of s1) {
    if (char in count) {
      count[char] += 1;
    } else {
      count[char] = 1;
    }
  }

  for (let char of s2) {
    if (!(char in count)){
      return false; 
    } else {
      count[char] -= 1;
    }
  }

  for (let char in count) {
    if (count[char] !== 0) return false;
  }
  return true;
}
console.log(anagrams('restful', 'fluster'))