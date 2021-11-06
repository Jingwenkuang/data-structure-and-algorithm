/*
minimum island
Write a function, minimumIsland, that takes in a grid containing Ws and Ls. 
W represents water and L represents land. The function should return the size 
of the smallest island. An island is a vertically or horizontally connected region of land.

You may assume that the grid contains at least one island.

test_00:
const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
];

minimumIsland(grid); // -> 2
 */

//dfs time o(c.r), space o(c.r) where r is row and c is column.
const minimumIsland = (grid) => {
 
  let min = Infinity; 
  const visited = new Set();
  
  for (let i = 0; i < grid.length; i++){
    for (let j = 0; j < grid[0].length; j++) {
      let size = (exploreIsland(grid, i, j, visited))
      if (size > 0 && size < min) min = size; 
    }
  }
  return min; 
}

  const exploreIsland = (grid, i, j, visited) => {
    
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length) return 0;
    if (grid[i][j] === "W") return 0; 
    const pos = i + ',' + j;
    if (visited.has(pos)) return 0; 
    visited.add(pos);
    let count = 1; 
    count += exploreIsland(grid, i - 1, j, visited);
    count += exploreIsland(grid, i + 1, j, visited);
    count += exploreIsland(grid, i, j - 1, visited);
    count += exploreIsland(grid, i, j + 1, visited);
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

minimumIsland(grid); // -> 2