var currentCell;
var stack = [];

function setup(){
  createCanvas(WIDTH , HEIGHT);
  GRID = generateGrid();
  currentCell = GRID[floor(random(0, GRID.length))][floor(random(0, GRID[0].length))];
}

function draw(){
  drawGrid();
  recursiveBacktracker(currentCell);
}