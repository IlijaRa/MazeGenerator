function sidewinderNorthwest(){
    SIDEWINDERS_RUN.push(CURRENT_CELL);

    let neighbors = getNeighborsNW(CURRENT_CELL);

    if(neighbors.length > 0){
        let randomNumber = floor(random(0, neighbors.length));
        
        let neighbor = neighbors[randomNumber];

        // chosen west neighbor
        if(neighbor.colPosition == CURRENT_CELL.colPosition - 1){
            removeWall(CURRENT_CELL, neighbor);

            neighbor.visited = true;

            CURRENT_CELL = neighbor;
        }
        // chosen north neighbor
        else if(neighbor.rowPosition == CURRENT_CELL.rowPosition - 1){
            if(SIDEWINDERS_RUN.length > 0){
                let randomNumber = floor(random(0, SIDEWINDERS_RUN.length));
            
                let randomCell = SIDEWINDERS_RUN[randomNumber];
    
                let randomCellNorthNeighbor = GRID[randomCell.rowPosition - 1][randomCell.colPosition];
                
                removeWall(randomCell, randomCellNorthNeighbor);
    
                if(neighbors.length == 1){
                    CURRENT_CELL = GRID[CURRENT_CELL.rowPosition - 1][GRID[0].length - 1];
                }
                else{
                    let lastRunCell = SIDEWINDERS_RUN[SIDEWINDERS_RUN.length - 1];
                    CURRENT_CELL = GRID[lastRunCell.rowPosition][lastRunCell.colPosition - 1];
                }
                CURRENT_CELL.visited = true;

                SIDEWINDERS_RUN = []; // setting array to empty
            }
            else{
                removeWall(CURRENT_CELL, neighbor);

                if(neighbors.length == 1)
                    CURRENT_CELL = GRID[CURRENT_CELL.rowPosition - 1][GRID[0].length - 1];
                else
                    CURRENT_CELL = GRID[CURRENT_CELL.rowPosition][CURRENT_CELL.colPosition - 1];

                CURRENT_CELL.visited = true;
            }
        }
    }
}

function sidewinderNortheast(){
    SIDEWINDERS_RUN.push(CURRENT_CELL);

    let neighbors = getNeighborsNE(CURRENT_CELL);

    if(neighbors.length > 0){
        let randomNumber = floor(random(0, neighbors.length));
        
        let neighbor = neighbors[randomNumber];

        // chosen east neighbor
        if(neighbor.colPosition == CURRENT_CELL.colPosition + 1){
            removeWall(CURRENT_CELL, neighbor);

            neighbor.visited = true;

            CURRENT_CELL = neighbor;
        }
        // chosen north neighbor
        else if(neighbor.rowPosition == CURRENT_CELL.rowPosition - 1){
            if(SIDEWINDERS_RUN.length > 0){
                let randomNumber = floor(random(0, SIDEWINDERS_RUN.length));
            
                let randomCell = SIDEWINDERS_RUN[randomNumber];
    
                let randomCellNorthNeighbor = GRID[randomCell.rowPosition - 1][randomCell.colPosition];
                
                removeWall(randomCell, randomCellNorthNeighbor);
    
                if(neighbors.length == 1){
                    CURRENT_CELL = GRID[CURRENT_CELL.rowPosition - 1][0];
                }
                else{
                    let lastRunCell = SIDEWINDERS_RUN[SIDEWINDERS_RUN.length - 1];
                    CURRENT_CELL = GRID[lastRunCell.rowPosition][lastRunCell.colPosition + 1];
                }
                CURRENT_CELL.visited = true;

                SIDEWINDERS_RUN = []; // setting array to empty
            }
            else{
                removeWall(CURRENT_CELL, neighbor);

                if(neighbors.length == 1)
                    CURRENT_CELL = GRID[CURRENT_CELL.rowPosition - 1][0];
                else
                    CURRENT_CELL = GRID[CURRENT_CELL.rowPosition][CURRENT_CELL.colPosition + 1];

                CURRENT_CELL.visited = true;
            }
        }
    }
}

function sidewinderSouthwest(){
    SIDEWINDERS_RUN.push(CURRENT_CELL);

    let neighbors = getNeighborsSW(CURRENT_CELL);

    if(neighbors.length > 0){
        let randomNumber = floor(random(0, neighbors.length));
        
        let neighbor = neighbors[randomNumber];

        // chosen west neighbor
        if(neighbor.colPosition == CURRENT_CELL.colPosition - 1){
            removeWall(CURRENT_CELL, neighbor);

            neighbor.visited = true;

            CURRENT_CELL = neighbor;
        }
        // chosen south neighbor
        else if(neighbor.rowPosition == CURRENT_CELL.rowPosition + 1){
            if(SIDEWINDERS_RUN.length > 0){
                let randomNumber = floor(random(0, SIDEWINDERS_RUN.length));
            
                let randomCell = SIDEWINDERS_RUN[randomNumber];
    
                let randomCellSouthNeighbor = GRID[randomCell.rowPosition + 1][randomCell.colPosition];
                
                removeWall(randomCell, randomCellSouthNeighbor);
    
                if(neighbors.length == 1){
                    CURRENT_CELL = GRID[CURRENT_CELL.rowPosition + 1][GRID[0].length - 1];
                }
                else{
                    let lastRunCell = SIDEWINDERS_RUN[SIDEWINDERS_RUN.length - 1];
                    CURRENT_CELL = GRID[lastRunCell.rowPosition][lastRunCell.colPosition - 1];
                }
                CURRENT_CELL.visited = true;

                SIDEWINDERS_RUN = []; // setting array to empty
            }
            else{
                removeWall(CURRENT_CELL, neighbor);

                if(neighbors.length == 1)
                    CURRENT_CELL = GRID[CURRENT_CELL.rowPosition + 1][GRID[0].length - 1];
                else
                    CURRENT_CELL = GRID[CURRENT_CELL.rowPosition][CURRENT_CELL.colPosition - 1];

                CURRENT_CELL.visited = true;
            }
        }
    }
}

function sidewinderSoutheast(){
    SIDEWINDERS_RUN.push(CURRENT_CELL);

    let neighbors = getNeighborsSE(CURRENT_CELL);

    if(neighbors.length > 0){
        let randomNumber = floor(random(0, neighbors.length));
        
        let neighbor = neighbors[randomNumber];

        // chosen east neighbor
        if(neighbor.colPosition == CURRENT_CELL.colPosition + 1){
            removeWall(CURRENT_CELL, neighbor);

            neighbor.visited = true;

            CURRENT_CELL = neighbor;
        }
        // chosen south neighbor
        else if(neighbor.rowPosition == CURRENT_CELL.rowPosition + 1){
            if(SIDEWINDERS_RUN.length > 0){
                let randomNumber = floor(random(0, SIDEWINDERS_RUN.length));
            
                let randomCell = SIDEWINDERS_RUN[randomNumber];
    
                let randomCellSouthNeighbor = GRID[randomCell.rowPosition + 1][randomCell.colPosition];
                
                removeWall(randomCell, randomCellSouthNeighbor);
    
                if(neighbors.length == 1){
                    CURRENT_CELL = GRID[CURRENT_CELL.rowPosition + 1][0];
                }
                else{
                    let lastRunCell = SIDEWINDERS_RUN[SIDEWINDERS_RUN.length - 1];
                    CURRENT_CELL = GRID[lastRunCell.rowPosition][lastRunCell.colPosition + 1];
                }
                CURRENT_CELL.visited = true;

                SIDEWINDERS_RUN = []; // setting array to empty
            }
            else{
                removeWall(CURRENT_CELL, neighbor);

                if(neighbors.length == 1)
                    CURRENT_CELL = GRID[CURRENT_CELL.rowPosition + 1][GRID[0].length - 1];
                else
                    CURRENT_CELL = GRID[CURRENT_CELL.rowPosition][CURRENT_CELL.colPosition + 1];

                CURRENT_CELL.visited = true;
            }
        }
    }
}