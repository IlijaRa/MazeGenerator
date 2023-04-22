var color1, color2;
let lerpedColor;
let t = 0;
function setup(){
  createCanvas(WIDTH , HEIGHT);
  GRID = generateGrid();
  CURRENT_CELL = GRID[floor(random(0, GRID.length))][floor(random(0, GRID[0].length))];
  CURRENT_CELL.visited = true;
  color1 = color(246, 248, 160);
  color2 = color(100, 200, 240);

  ACTIVE.push(CURRENT_CELL);
}

function draw(){
  drawGrid();
  // binaryTree();
  // recursiveBacktracker();
  // recursiveDivision();
  // growingTree();
  simplifiedPrim();
}