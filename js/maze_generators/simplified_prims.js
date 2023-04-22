function simplifiedPrims(){
    if(ACTIVE.length > 0){
        let randomValue = floor(random(0, ACTIVE.length));

        let cell = ACTIVE[randomValue];
        
        cell.highlight();

        let available_neighbors = getNeighborsSP(cell);

        if(available_neighbors.length > 0){
            let randomValue = floor(random(0, available_neighbors.length));

            let neighbor = available_neighbors[randomValue]
            
            removeWall(cell, neighbor);

            neighbor.visited = true;

            ACTIVE.push(neighbor);
        }
        else{
            const index = ACTIVE.indexOf(cell);
            
            if (index > -1)
                ACTIVE.splice(index, 1);
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