var current_cell;

function setup(){
  createCanvas(WIDTH , HEIGHT);
  GRID = generateGrid();
  current_cell = GRID[0][0];
  console.log('current cell', current_cell)
}

function draw(){
  drawGrid();

  current_cell.visited = true;
  var next_cell = current_cell.checkNeighbors();
  console.log('next cell', next_cell)
  if(next_cell){
    next_cell.visited = true;
    current_cell = next_cell;
    // console.log('next cell', next_cell);
  }
}