async function recursiveBacktracker(){
    CURRENT_CELL.visited = true;

    let neighbors = getNeighborsRB(CURRENT_CELL);
  
    if(neighbors.length > 0){
        let randomValue = floor(random(0, neighbors.length));
        let chosenNeighbor = neighbors[randomValue];
        chosenNeighbor.visited = true;
        removeWalls(CURRENT_CELL, chosenNeighbor);
        STACK.push(CURRENT_CELL);
        CURRENT_CELL = chosenNeighbor;
    }
    else if(STACK.length > 0){
        CURRENT_CELL = STACK.pop();
    }
}

function getNeighborsRB(currentCell){
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