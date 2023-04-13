const sleep = (time) => {
    return new Promise(resolve => setTimeout(resolve, time))
}

function getNeighbors(currentCell){
    let neighbors = [];

    //north neighbor
    if(checkNeighbor(currentCell.positionX, currentCell.positionY - 1))
        neighbors.push(GRID[currentCell.positionX][currentCell.positionY - 1]);

    //west neighbor
    if(checkNeighbor(currentCell.positionX - 1, currentCell.positionY))
        neighbors.push(GRID[currentCell.positionX - 1][currentCell.positionY]); 

    //east neighbor
    if(checkNeighbor(currentCell.positionX + 1, currentCell.positionY))
        neighbors.push(GRID[currentCell.positionX + 1][currentCell.positionY]);

    //south neighbor
    if(checkNeighbor(currentCell.positionX, currentCell.positionY + 1))
        neighbors.push(GRID[currentCell.positionX][currentCell.positionY + 1]); 

    return neighbors;
}

function checkNeighbor(positionX, positionY){
    if(validatePosition(positionX, positionY) && !checkIfVisited(positionX, positionY))
        return true;
    return false;
}

function validatePosition(positionX, positionY){
    if (positionX < 0  || positionY < 0 || positionY > GRID.length - 1 ||  positionX > GRID[0].length - 1)
        return false
    return true;
}

function checkIfVisited(positionX, positionY){
    var cell = GRID[positionX][positionY];
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