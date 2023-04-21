function growingTree(){
    if(CURRENT_CELL == undefined)
        return;
    
    CURRENT_CELL.visited = true;
    CURRENT_CELL.highlight();

    GROWING_TREE_ARRAY.push(CURRENT_CELL);

    if(GROWING_TREE_ARRAY.length > 0){
        chosenCell = GROWING_TREE_ARRAY.pop()//[GROWING_TREE_ARRAY.length - 1];

        let neighbors = getNeighborsGT(chosenCell);

        if(neighbors.length < 1){
            //removing chosenCell item from the array because there is no unvisited neighbors around
            const index = GROWING_TREE_ARRAY.indexOf(chosenCell);
            if (index > -1) { // only splice array when item is found
                GROWING_TREE_ARRAY.splice(index, 1); // 2nd parameter means remove one item only
            }
            
            CURRENT_CELL = GROWING_TREE_ARRAY[GROWING_TREE_ARRAY.length - 1];
        }
        else{
            let randomValue = floor(random(0, neighbors.length));

            randomNeighbor = neighbors[randomValue];
    
            removeWall(chosenCell, randomNeighbor);
    
            randomNeighbor.visited = true;

            GROWING_TREE_ARRAY.push(randomNeighbor);

            CURRENT_CELL = randomNeighbor;
        }
    }
    else
        return;
}

function getNeighborsGT(currentCell){
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