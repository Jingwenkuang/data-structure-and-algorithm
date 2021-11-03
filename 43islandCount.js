/*
island count
Write a function, islandCount, 
that takes in a grid containing Ws and Ls. W represents water and L represents land. 
The function should return the number of islands on the grid. 
An island is a vertically or horizontally connected region of land.

test_00:
const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
];

islandCount(grid); // -> 3
 */

const islandCount = (grid) => {
  let row = grid.length;   
  let col = grid[0].length; 
  let count = 0; 

  var dfs = (i, j) => {
  if (i >= 0 && i < row && j >= 0 && j < col && grid[i][j] === "L"){
    grid[i][j] = "W";
    dfs(i + 1, j);
    dfs(i - i, j);
    dfs(i, j - 1);
    dfs(i, j + 1)
  }
}

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      let current = grid[i][j];
      if (current === "L") {
        count += 1;
        dfs (i, j)
      }
    }
  }
  return count;
}


const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
];

console.log(islandCount(grid)); // -> 3