/*
most frequent char
Write a function, mostFrequentChar, that takes in a string as an argument. 
The function should return the most frequent character of the string. 
If there are ties, return the character that appears earlier in the string.

You can assume that the input string is non-empty.

test_00:
mostFrequentChar('bookeeper'); // -> 'e'
test_01:
mostFrequentChar('david'); // -> 'd'
*/


//using hashmap (object)
//time o(n), space o(n)
const mostFrequentChar = (s) => {
  const count = {};

  for (let char of s) {
    if (!(char in count)) {
      count[char] = 0;
    }
    count[char] += 1;
  } 
  //{ b: 1, o: 2, k: 1, e: 3, p: 1, r: 1 }

  let best = null; //because count[null] = undefined;
  for (let char of s) {
    if (best === null || count[char] > count[best]){
      best = char;
    }
  }
  // console.log(count)
  return best;
}

console.log(mostFrequentChar('bookeeper'))