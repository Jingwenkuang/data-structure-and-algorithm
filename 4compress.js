/*
compress
Write a function, compress, that takes in a string as an argument. 
The function should return a compressed version of the string where 
consecutive occurences of the same characters are compressed into the 
number of occurences followed by the character. 
Single character occurences should not be changed.

'aaa' compresses to '3a'
'cc' compresses to '2c'
't' should remain as 't'

You can assume that the input only contains alphabetic characters.

test_00:
compress('ccaaatsss'); // -> '2c3at3s'
compress('ppoppppp'); // -> '2po5p'
 */


//time o(n), space o(n)
//using two pointer, count = j - i; 
const compress = (s) => {

  let result = [];

  let i = 0; 
  let j = 0;
  while (j <= s.length) { 
    //using <= because when j = s.length, s[j] = undefined which s[j] not equal to s[i], taking care of the edge case
    if (s[j] === s[i]) {
      j++;
    } else {
      let count = j - i; 
      if (count === 1) {
        result.push(s[i])
      } else {
        result.push(count+s[i]);
      } 
      i = j; 
    }
  }
  return result.join('');
}

console.log(compress('ccaaatsss')); // -> '2c3at3s'
console.log(compress('t')); // -> 't'