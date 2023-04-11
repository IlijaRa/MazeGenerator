var current_cell;

function setup(){
  createCanvas(WIDTH , HEIGHT);
  GRID = generateGrid();
  current_cell = GRID[0][0];
}

function draw(){
  drawGrid();

  current_cell.visited = true;
}