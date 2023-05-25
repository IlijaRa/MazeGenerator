function generateGrid() {
    var no_rows = floor(HEIGHT / ROW_WIDTH);
    var no_cols = floor(WIDTH / COL_WIDTH);

    // grid variable will receive all cells
    var grid = [];

    for (j = 0; j < no_rows; j++) {
        grid[j] = [];
        for (i = 0; i < no_cols; i++) {
            grid[j][i] = new Cell(j, i);
            grid[j][i].weight = floor(random(0, MAX_WEIGHT));
        }
    }
    
    return grid;
}

function drawGrid() {
    var no_rows = floor(HEIGHT / ROW_WIDTH);
    var no_cols = floor(WIDTH / COL_WIDTH);

    let offsetX = WIDTH / 2 - (no_cols * COL_WIDTH) / 2; // Calculate X offset to center the array
    let offsetY = HEIGHT / 2 - (no_rows * ROW_WIDTH) / 2; // Calculate Y offset to center the array

    for (i = 0; i < GRID.length; i++) {
        for (j = 0; j < GRID[0].length; j++) {
            let x = j * COL_WIDTH + offsetX; // Calculate X position of the element
            let y = i * ROW_WIDTH + offsetY; // Calculate Y position of the element
            GRID[i][j].show(x, y);
        }
    }
}

function removeWall(currentCell, neighborCell) {
    let currentCellPosition = currentCell.getPosition();
    let neighborCellPosition = neighborCell.getPosition();

    if (neighborCellPosition[0] === (currentCellPosition[0] - 1)) {
        currentCell.N = false;
        neighborCell.S = false;
    }
    else if (neighborCellPosition[0] === (currentCellPosition[0] + 1)) {
        currentCell.S = false;
        neighborCell.N = false;
    }
    else if (neighborCellPosition[1] === (currentCellPosition[1] - 1)) {
        currentCell.W = false;
        neighborCell.E = false;
    }
    else {
        currentCell.E = false;
        neighborCell.W = false;
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}

function countUnvisitedCells() {
    let counter = 0;

    for (let i = 0; i < GRID.length; i++) {
        for (let j = 0; j < GRID[0].length; j++) {
            if (GRID[i][j].visited == false)
                counter++;
        }
    }

    return counter;
}

function countDeadEnds(){
    let counter = 0;

    for (let i = 0; i < GRID.length; i++) {
        for (let j = 0; j < GRID[0].length; j++) {
            if (GRID[i][j].noConnections == 1)
                counter++;
        }
    }

    return counter;
}