// getNeighborsNWES observe NORTH, WEST, EAST and SOUTH neighbors of the current cell
function getNeighborsNWES(currentCell){
    let neighbors = [];

    //north neighbor
    if(checkNeighbor(currentCell.rowPosition, currentCell.colPosition - 1))
        neighbors.push(GRID[currentCell.rowPosition][currentCell.colPosition - 1]);

    //west neighbor
    if(checkNeighbor(currentCell.rowPosition - 1, currentCell.colPosition))
        neighbors.push(GRID[currentCell.rowPosition - 1][currentCell.colPosition]); 

    //east neighbor
    if(checkNeighbor(currentCell.rowPosition + 1, currentCell.colPosition))
        neighbors.push(GRID[currentCell.rowPosition + 1][currentCell.colPosition]);

    //south neighbor
    if(checkNeighbor(currentCell.rowPosition, currentCell.colPosition + 1))
        neighbors.push(GRID[currentCell.rowPosition][currentCell.colPosition + 1]); 

    return neighbors;
}

// getNeighborsNW observe NORTH and WEST neighbors of the current cell
function getNeighborsNW(currentCell){
    let neighbors = [];

    //north neighbor
    if(checkNeighbor(currentCell.rowPosition, currentCell.colPosition - 1))
        neighbors.push(GRID[currentCell.rowPosition][currentCell.colPosition - 1]);

    //west neighbor
    if(checkNeighbor(currentCell.rowPosition - 1, currentCell.colPosition))
        neighbors.push(GRID[currentCell.rowPosition - 1][currentCell.colPosition]); 

    return neighbors;
}

// getNeighborsNE observe NORTH and EAST neighbors of the current cell
function getNeighborsNE(currentCell){
    let neighbors = [];

    //north neighbor
    if(checkNeighbor(currentCell.rowPosition - 1, currentCell.colPosition))
        neighbors.push(GRID[currentCell.rowPosition - 1][currentCell.colPosition]);

    //east neighbor
    if(checkNeighbor(currentCell.rowPosition, currentCell.colPosition + 1))
        neighbors.push(GRID[currentCell.rowPosition][currentCell.colPosition + 1]);

    return neighbors;
}

function checkNeighbor(rowPosition, colPosition){
    if(validatePosition(rowPosition, colPosition) && !isVisited(rowPosition, colPosition))
        return true;
    return false;
}

function validatePosition(rowPosition, colPosition){
    if (rowPosition < 0  || colPosition < 0 || rowPosition > GRID.length - 1 || colPosition > GRID[0].length - 1)
        return false;
    return true;
}

function isVisited(rowPosition, colPosition){
    let cell = GRID[rowPosition][colPosition];
    return cell.visited;
}