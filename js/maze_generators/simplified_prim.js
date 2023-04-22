function simplifiedPrim(){
    if(ACTIVE.length > 0){
        let randomValue = floor(random(0, ACTIVE.length));

        let cell = ACTIVE[randomValue];

        let available_neighbors = getNeighborsSP(cell);

        if(available_neighbors.length > 0){
            let randomValue = floor(random(0, available_neighbors.length));

            let neighbor = available_neighbors[randomValue]
            
            removeWall(cell, neighbor);

            neighbor.visited = true;

            ACTIVE.push(neighbor);
        }
        else{
            //removing chosenCell item from the array because there is no unvisited neighbors around
            const index = ACTIVE.indexOf(cell);
            if (index > -1) { // only splice array when item is found
                ACTIVE.splice(index, 1); // 2nd parameter means remove one item only
            }
        }
    }
}

function getNeighborsSP(currentCell){
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