/*Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Input: s = "()[]{}"
Output: true
 */

function validParenthese(s) {
  const pairs = {
    "(": ")",
    "[": "]",
    "{": "}"
  }

  let stack = [];
  for (let string of s) {
    if (pairs[string]){
      stack.push(string)
    }
    if (string === ")" || string === "]" || string === "}"){
      if (pairs[stack.pop()] !== string) return false;
    }
  }
  return stack.length === 0;
}

let s = "()[]{}";
console.log(validParenthese(s))