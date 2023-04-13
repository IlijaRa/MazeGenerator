var currentCell;
var stack = [];

function setup(){
  createCanvas(WIDTH , HEIGHT);
  GRID = generateGrid();
  currentCell = GRID[5][5];
  frameRate(5);
}

function draw(){
  drawGrid();
  recursiveBacktracker(currentCell);
}