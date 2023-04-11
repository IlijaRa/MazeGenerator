var current_cell;
var stack = [];

function setup(){
  createCanvas(WIDTH , HEIGHT);
  GRID = generateGrid();
  current_cell = GRID[5][5];
  frameRate(5);
}

function draw(){
  drawGrid();

  current_cell.visited = true;
  current_cell.highlight();
  // step 1
  var next_cell = current_cell.checkNeighbors();

  if(next_cell){
    next_cell.visited = true;

    // step 2
    stack.push(current_cell);
    // step 3
    removeWalls(current_cell, next_cell);
    // step 4
    current_cell = next_cell;
  }
  else if(stack.length > 0){
    current_cell = stack.pop();
  }
}