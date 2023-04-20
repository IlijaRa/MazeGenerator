async function binaryTree(){
    CURRENT_CELL.visited = true;

    let neighbors = getNeighborsTF(CURRENT_CELL);

    if(neighbors.length > 0){
        let randomValue = floor(random(0, neighbors.length));
        let chosenNeighbor = neighbors[randomValue];
        chosenNeighbor.visited = true;
        removeWalls(CURRENT_CELL, chosenNeighbor);
        CURRENT_CELL = chosenNeighbor;
    }
    else{
        CURRENT_CELL.W = false;
        CURRENT_CELL.S = false;
        if(validatePosition(CURRENT_CELL.rowPosition, CURRENT_CELL.colPosition - 1))
            GRID[CURRENT_CELL.rowPosition][CURRENT_CELL.colPosition - 1].E = false;
        if(validatePosition(CURRENT_CELL.rowPosition + 1, CURRENT_CELL.colPosition))
            GRID[CURRENT_CELL.rowPosition + 1][CURRENT_CELL.colPosition].N = false;
        
        let unvisitedCell = getUnvisitedCell();
        if(unvisitedCell != null)
            CURRENT_CELL = unvisitedCell;//GRID[floor(random(0, GRID.length))][floor(random(0, GRID[0].length))];
        else 
            return;
    }
}

function getNeighborsTF(currentCell){
    let neighbors = [];

    //north neighbor
    if(checkNeighbor(currentCell.rowPosition, currentCell.colPosition - 1))
        neighbors.push(GRID[currentCell.rowPosition][currentCell.colPosition - 1]);

    //east neighbor
    if(checkNeighbor(currentCell.rowPosition + 1, currentCell.colPosition))
        neighbors.push(GRID[currentCell.rowPosition + 1][currentCell.colPosition]);

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

function getUnvisitedCell(){
    let unvisitedCells = [];
    for(let row = 0; row < GRID.length; row++){
        for(let col = 0; col < GRID[0].length; col++){
            if(!GRID[row][col].visited){
                unvisitedCells.push(GRID[row][col]);
            }
        }
    }

    if(unvisitedCells.length < 1)
        return null;

    return shuffleArray(unvisitedCells)[0];
}