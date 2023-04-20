function setup(){
  createCanvas(WIDTH , HEIGHT);
  GRID = generateGrid();
  //CURRENT_CELL = GRID[GRID.length - 1][GRID[0].length - 1];
  CURRENT_CELL = GRID[floor(random(0, GRID.length))][floor(random(0, GRID[0].length))];
  // CURRENT_CELL.visited = true;
}

function draw(){
  drawGrid();
  binaryTree();
  // recursiveBacktracker();
}