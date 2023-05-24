function binaryTreeNorthwest() {
    if (countUnvisitedCells() == 0)
        return;

    CURRENT_CELL.highlight();
    let neighbors = getNeighborsNW(CURRENT_CELL);

    if (neighbors.length < 1)
        return;

    let randomNumber = floor(random(0, neighbors.length));

    let neighbor = neighbors[randomNumber];

    removeWall(CURRENT_CELL, neighbor);

    if (neighbors.length == 1) {
        if (CURRENT_CELL.colPosition == 0)
            CURRENT_CELL = GRID[CURRENT_CELL.rowPosition - 1][GRID[0].length - 1];
        else if (CURRENT_CELL.rowPosition == 0)
            CURRENT_CELL = GRID[0][CURRENT_CELL.colPosition - 1];
    }
    else if (neighbors.length == 2) {
        CURRENT_CELL = GRID[CURRENT_CELL.rowPosition][CURRENT_CELL.colPosition - 1];
    }

    CURRENT_CELL.visited = true;
}

function binaryTreeNortheast() {
    if (countUnvisitedCells() == 0)
        return;

    CURRENT_CELL.highlight();
    let neighbors = getNeighborsNE(CURRENT_CELL);

    if (neighbors.length < 1)
        return;

    let randomNumber = floor(random(0, neighbors.length));

    let neighbor = neighbors[randomNumber];

    removeWall(CURRENT_CELL, neighbor);

    if (neighbors.length == 1) {
        if (CURRENT_CELL.colPosition == GRID[0].length - 1)
            CURRENT_CELL = GRID[CURRENT_CELL.rowPosition - 1][0];
        else if (CURRENT_CELL.rowPosition == 0)
            CURRENT_CELL = GRID[0][CURRENT_CELL.colPosition + 1];
    }
    else if (neighbors.length == 2) {
        CURRENT_CELL = GRID[CURRENT_CELL.rowPosition][CURRENT_CELL.colPosition + 1];
    }

    CURRENT_CELL.visited = true;
}

function binaryTreeSouthwest() {
    if (countUnvisitedCells() == 0)
        return;

    CURRENT_CELL.highlight();
    let neighbors = getNeighborsSW(CURRENT_CELL);

    if (neighbors.length < 1)
        return;

    let randomNumber = floor(random(0, neighbors.length));

    let neighbor = neighbors[randomNumber];

    removeWall(CURRENT_CELL, neighbor);

    if (neighbors.length == 1) {
        if (CURRENT_CELL.colPosition == 0)
            CURRENT_CELL = GRID[CURRENT_CELL.rowPosition + 1][GRID[0].length - 1];
        else if (CURRENT_CELL.rowPosition == GRID.length - 1)
            CURRENT_CELL = GRID[GRID.length - 1][CURRENT_CELL.colPosition - 1];
    }
    else if (neighbors.length == 2) {
        CURRENT_CELL = GRID[CURRENT_CELL.rowPosition][CURRENT_CELL.colPosition - 1];
    }

    CURRENT_CELL.visited = true;
}

function binaryTreeSoutheast() {
    if (countUnvisitedCells() == 0)
        return;

    CURRENT_CELL.highlight();
    let neighbors = getNeighborsSE(CURRENT_CELL);

    if (neighbors.length < 1)
        return;

    let randomNumber = floor(random(0, neighbors.length));

    let neighbor = neighbors[randomNumber];

    removeWall(CURRENT_CELL, neighbor);

    if (neighbors.length == 1) {
        if (CURRENT_CELL.colPosition == GRID[0].length - 1)
            CURRENT_CELL = GRID[CURRENT_CELL.rowPosition + 1][0];
        else if (CURRENT_CELL.rowPosition == GRID.length - 1)
            CURRENT_CELL = GRID[GRID.length - 1][CURRENT_CELL.colPosition + 1];
    }
    else if (neighbors.length == 2) {
        CURRENT_CELL = GRID[CURRENT_CELL.rowPosition][CURRENT_CELL.colPosition + 1];
    }

    CURRENT_CELL.visited = true;
}