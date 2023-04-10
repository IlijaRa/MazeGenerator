function setup(){
  createCanvas(WIDTH , HEIGHT);
}

function draw(){
  generateGrid();
}

function generateGrid(){
  for(i = 0; i < floor(WIDTH/ROWS_WIDTH); i++){
    for(j = 0; j < floor(HEIGHT/COLS_WIDTH); j++){
      rect(i * ROWS_WIDTH, j * COLS_WIDTH, ROWS_WIDTH, COLS_WIDTH);
    }
  }
}