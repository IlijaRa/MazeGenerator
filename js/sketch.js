var currentCell = new Cell();
let stack = [];
function setup(){
  createCanvas(WIDTH , HEIGHT);
  GRID = generateGrid();
  currentCell = GRID[floor(random(0, GRID.length))][floor(random(0, GRID[0].length))];
}

function draw(){
  drawGrid();

  let neighbors = getNeighborsRB(currentCell);
  
  if(neighbors.length > 0){
    let randomValue = floor(random(0, neighbors.length));
    let chosenNeighbor = neighbors[randomValue];
    chosenNeighbor.visited = true;
    removeWalls(currentCell, chosenNeighbor);
    stack.push(currentCell);
    currentCell = chosenNeighbor;
  }
  else if(stack.length > 0){
    currentCell = stack.pop();
  }
}