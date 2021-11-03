/*773. Sliding Puzzle
On an 2 x 3 board, there are five tiles labeled from 1 to 5, and an empty square represented by 0. 
A move consists of choosing 0 and a 4-directionally adjacent number and swapping it.

The state of the board is solved if and only if the board is [[1,2,3],[4,5,0]].

Given the puzzle board board, return the least number of moves required so that 
the state of the board is solved. If it is impossible for the state of the board to be solved, 
return -1.
Input: board = [[1,2,3],[4,0,5]]
Output: 1
Explanation: Swap the 0 and the 5 in one move.
 */

var slidingPuzzle = function(board) {
    const target = "123450";
    const start = board[0].concat(board[1]).join(""); //'412503'
 
    const queue = [start];
    const dir = [[1,3], [0, 2, 4], [1, 5], [0, 4], [1, 3, 5], [2, 4]];
    const visited = new Set([start]);
    let steps = 0;
    while (queue.length) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const curr = queue.shift();
            if (curr === target) return steps;
            const idx0 = curr.indexOf("0");
            for (const idx of dir[idx0]) {
                const next = getNext(idx0, idx, curr);
                if (!visited.has(next)) {
                    visited.add(next);queue.push(next);
                }
            } 
        }
        steps++;
    }
    return -1;    
};
function getNext(idx0, idx, curr) {
    const arr = curr.split("");
    arr[idx0] = curr[idx];
    arr[idx] = "0";
    return arr.join("");
}

let board = [[1,2,3],[4,0,5]];
let board2 = [[3,2,4],[1,5,0]]
let board3 = [[4,1,2],[5,0,3]]
console.log(slidingPuzzle(board3))