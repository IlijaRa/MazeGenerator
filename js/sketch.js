let t = 0;
function setup() {
  createCanvas(WIDTH, HEIGHT);
  GRID = generateGrid();
  setCurrentCell();
  // populating arrays with CURRENT_CELL as the first item
  ACTIVE.push(CURRENT_CELL);
}

function draw() {
  drawGrid();

  if(ALGORITHM_TRIGGER == "binary-tree-northwest-btn")
    binaryTreeNorthwest();
  else if(ALGORITHM_TRIGGER == "binary-tree-northeast-btn")
    binaryTreeNortheast();
  else if(ALGORITHM_TRIGGER == "binary-tree-southwest-btn")
    binaryTreeSouthwest();
  else if(ALGORITHM_TRIGGER == "binary-tree-southeast-btn")
    binaryTreeSoutheast();
  else if(ALGORITHM_TRIGGER == "sidewinder-northwest-btn")
    sidewinderNorthwest();
  else if(ALGORITHM_TRIGGER == "sidewinder-northeast-btn")
    sidewinderNortheast();
  else if(ALGORITHM_TRIGGER == "sidewinder-southwest-btn")
    sidewinderSouthwest();
  else if(ALGORITHM_TRIGGER == "sidewinder-southheast-btn")
    sidewinderSoutheast();
  else if(ALGORITHM_TRIGGER == "aldous-broder-btn")
    AldousBroder();
  else if(ALGORITHM_TRIGGER == "wilsons-btn")
    wilsons();
  else if(ALGORITHM_TRIGGER == "hunt-and-kill-btn")
    huntAndKill();
  else if(ALGORITHM_TRIGGER == "recursive-backtracker-btn")
    recursiveBacktracker();
  // else if(ALGORITHM_TRIGGER == "kruskal-btn")
  //   sidewinderSoutheast();
  else if(ALGORITHM_TRIGGER == "simplified-prims-btn")
    simplifiedPrims();
  else if(ALGORITHM_TRIGGER == "true-prims-btn")
    truePrims();
  else if(ALGORITHM_TRIGGER == "growing-tree-btn")
    growingTree();
  // else if(ALGORITHM_TRIGGER == "ellers-btn")
  //   sidewinderSoutheast();
  // else if(ALGORITHM_TRIGGER == "recursive-division-btn")
  //   recursiveDivision();

  if(CLEAR_GRID == 1){
    CLEAR_GRID = 0;
    resetAllGlobals();
    setup();
  }
}

function setCurrentCell(){
  if(ALGORITHM_TRIGGER == "binary-tree-northwest-btn" || ALGORITHM_TRIGGER == "sidewinder-northwest-btn")
    CURRENT_CELL = GRID[GRID.length - 1][GRID[0].length - 1];
  else if(ALGORITHM_TRIGGER == "binary-tree-northeast-btn" || ALGORITHM_TRIGGER == "sidewinder-northeast-btn")
    CURRENT_CELL = GRID[GRID.length - 1][0];
  else if(ALGORITHM_TRIGGER == "binary-tree-southwest-btn" || ALGORITHM_TRIGGER == "sidewinder-southwest-btn")
    CURRENT_CELL = GRID[0][GRID[0].length - 1];
  else if(ALGORITHM_TRIGGER == "binary-tree-southeast-btn" || ALGORITHM_TRIGGER == "sidewinder-southheast-btn")
    CURRENT_CELL = GRID[0][0];
  else
    CURRENT_CELL = GRID[floor(random(0, GRID.length - 1))][floor(random(0, GRID[0].length - 1))];
  
  CURRENT_CELL.visited = true;
}