async function binaryTree(){

    let neighbors = getNeighborsTF(CURRENT_CELL);

    if(neighbors.length > 0){
        let randomNumber = floor(random(0, neighbors.length));
        
        let neighbor = neighbors[randomNumber];

        removeWall(CURRENT_CELL, neighbor);

        if(neighbors.length == 1){
            if(GRID[CURRENT_CELL.rowPosition - 1][0] != undefined){
                CURRENT_CELL = GRID[CURRENT_CELL.rowPosition - 1][0];
            }
            else if(GRID[0][CURRENT_CELL.colPosition + 1] != undefined){
                CURRENT_CELL = GRID[0][CURRENT_CELL.colPosition + 1];
            }
        }
        else if(neighbors.length == 2){
            CURRENT_CELL = GRID[CURRENT_CELL.rowPosition][CURRENT_CELL.colPosition + 1];
        }

        CURRENT_CELL.visited = true;
    }
}

function getNeighborsTF(currentCell){
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