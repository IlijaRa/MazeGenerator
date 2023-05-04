function huntAndKill() {
    if(countUnvisitedCells() > 0){
        CURRENT_CELL.highlight();

        let neighbors = getNeighborsNWES(CURRENT_CELL);

        if (neighbors.length < 1) {
            // Hunt mode
            let huntedCell = HuntNextCell();

            if(huntedCell != null){
                // huntedCell[0] = hunted unvisited cell, huntedCell[1] = hunted unvisited cell's random neighbor
                removeWall(huntedCell[0], huntedCell[1]);

                CURRENT_CELL = huntedCell[1];
            }
        }
        else {
            // Kill mode:
            let randomNumber = floor(random(0, neighbors.length));
    
            let neighbor = neighbors[randomNumber];
    
            neighbor.visited = true;
    
            removeWall(CURRENT_CELL, neighbor);
    
            CURRENT_CELL = neighbor;
        }
    }
}

function HuntNextCell() {
    for (let i = 0; i < GRID.length; i++) {
        for (let j = 0; j < GRID[0].length; j++) {
            if (GRID[i][j].visited == false){
                let neighbors = getVisitedNeighborsOnlyNWES(GRID[i][j]);
                if(neighbors.length > 0){
                    let randomNumber = floor(random(0, neighbors.length));
                    let neighbor = neighbors[randomNumber];
                    return [GRID[i][j], neighbor];
                }
            }
        }
    }

    return null;
}