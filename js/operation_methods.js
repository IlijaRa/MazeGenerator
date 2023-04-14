const sleep = (time) => {
    return new Promise(resolve => setTimeout(resolve, time));
}

function getNeighbors(currentCell){
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

function checkNeighbor(rowPosition, colPosition){
    if(validatePosition(rowPosition, colPosition) && !checkIfVisited(rowPosition, colPosition))
        return true;
    return false;
}

function validatePosition(rowPosition, colPosition){
    if (rowPosition < 0  || colPosition < 0 || rowPosition > GRID.length - 1 || colPosition > GRID[0].length - 1)
        return false;
    return true;
}

function checkIfVisited(rowPosition, colPosition){
    var cell = GRID[rowPosition][colPosition];
    return cell.visited;
}

function removeWalls(currentCell, neighborCell){
    let currentCellPosition = currentCell.getPosition();
    let neighborCellPosition = neighborCell.getPosition();

    if(neighborCellPosition[0] === (currentCellPosition[0] - 1)){
        currentCell.N = false;
        neighborCell.S = false;
    }
    else if(neighborCellPosition[0] === (currentCellPosition[0] + 1)){
        currentCell.S = false;
        neighborCell.N = false;
    }
    else if(neighborCellPosition[1] === (currentCellPosition[1] - 1)){
        currentCell.W = false;
        neighborCell.E = false;
    }
    else{
        currentCell.E = false;
        neighborCell.W = false;
    }
}