let t = 0;
function setup(){
  createCanvas(WIDTH , HEIGHT);
  GRID = generateGrid();

  CURRENT_CELL = GRID[floor(random(0, GRID.length))][floor(random(0, GRID[0].length))];
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
  AldousBroder();
  // recursiveBacktracker();
  // recursiveDivision();
  // growingTree();
  // simplifiedPrims();
}