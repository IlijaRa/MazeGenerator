function generateGrid() {
    var no_rows = floor(HEIGHT / ROW_WIDTH);
    var no_cols = floor(WIDTH / COL_WIDTH);

    // grid variable will receive all cells
    var grid = [];

    for (j = 0; j < no_rows; j++) {
        grid[j] = [];
        for (i = 0; i < no_cols; i++) {
            grid[j][i] = new Cell(j, i);
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