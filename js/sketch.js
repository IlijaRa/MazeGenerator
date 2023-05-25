let t = 0;
function setup() {
  createCanvas(WIDTH, HEIGHT);
  GRID = generateGrid();
}

function draw() {
  drawGrid();
  switch (ALGORITHM_TRIGGER) {
    case "binary-tree-northwest-btn": binaryTreeNorthwest(); break;
    case "binary-tree-northeast-btn": binaryTreeNortheast(); break;
    case "binary-tree-southwest-btn": binaryTreeSouthwest(); break;
    case "binary-tree-southeast-btn": binaryTreeSoutheast(); break;
    case "sidewinder-northwest-btn": sidewinderNorthwest(); break;
    case "sidewinder-northeast-btn": sidewinderNortheast(); break;
    case "sidewinder-southwest-btn": sidewinderSouthwest(); break;
    case "sidewinder-southeast-btn": sidewinderSoutheast(); break;
    case "aldous-broder-btn": AldousBroder(); break;
    case "wilsons-btn": wilsons(); break;
    case "hunt-and-kill-btn": huntAndKill(); break;
    case "recursive-backtracker-btn": recursiveBacktracker(); break;
    case "simplified-prims-btn": simplifiedPrims(); break;
    case "true-prims-btn": truePrims(); break;
    case "growing-tree-btn": growingTree(); break;
    default:
  }

  if (CLEAR_GRID == 1) {
    CLEAR_GRID = 0;
    resetAllGlobals();
    setup();
  }
}