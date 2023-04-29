var color1, color2;
let lerpedColor;
let t = 0;

function setup(){
  createCanvas(WIDTH , HEIGHT);
  GRID = generateGrid();

  CURRENT_CELL = GRID[0][0];
  CURRENT_CELL.visited = true;

  color1 = color(246, 248, 160);
  color2 = color(100, 200, 240);

  // populating arrays with CURRENT_CELL as the first item 
  ACTIVE.push(CURRENT_CELL);
}

function draw(){
  drawGrid();
  // binaryTreeNorthwest();
  // binaryTreeNortheast();
  // binaryTreeSouthwest();
  // binaryTreeSoutheast();
  // sidewinderNortheast();
  // sidewinderNorthwest();
  // sidewinderSouthwest();
  // sidewinderSoutheast();
  // recursiveBacktracker();
  // recursiveDivision();
  // growingTree();
  // simplifiedPrims();
}