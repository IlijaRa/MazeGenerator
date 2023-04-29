let t = 0;
function setup(){
  createCanvas(WIDTH , HEIGHT);
  GRID = generateGrid();

  CURRENT_CELL = GRID[0][0];
  CURRENT_CELL.visited = true;

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
  recursiveBacktracker();
  // recursiveDivision();
  // growingTree();
  // simplifiedPrims();
}