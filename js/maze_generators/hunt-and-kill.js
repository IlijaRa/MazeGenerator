function huntAndKill() {
    let neighbors = getNeighborsNWES(CURRENT_CELL);

    if (neighbors.length < 1) {
        // Hunt mode:
        let found = false;

        for (i = 0; i < GRID.length - 1; i++) {
            for (j = 0; j < GRID[0].length - 1; j++) {
                let cell = GRID[i][j];
                if (cell.visited) {
                    let neighbors = getNeighborsNWES(cell);
                    if (neighbors.length > 0) {
                        let randomNumber = floor(random(0, neighbors.length));
                        let neighbor = neighbors[randomNumber];
                        removeWall(CURRENT_CELL, neighbor);
                        neighbor.visited = true;
                        CURRENT_CELL = neighbor;
                        found = true;
                    }
                }
            }
        }

        if (!found) {
            let killCoords = new Cell();
            for (i = 0; i < GRID.length - 1; i++) {
                for (j = 0; j < GRID[0].length - 1; j++) {
                    let cell = GRID[i][j];
                    if (cell.visited) {
                        let neighbors = getNeighborsNWES(cell);
                        for (let i = 0; i < neighbors.length; i++) {
                            if (!neighbor.visited) {
                                killCoords = neighbor;
                                break;
                            }
                        }
                    }
                }
            }

            if (killCoords) {
                // If such a cell is found, mark it as visited and "kill" the wall between the current cell and the adjacent visited cell.
                killCoords.visited = true;
                removeWall(CURRENT_CELL, killCoords);
                CURRENT_CELL = killCoords;
            }
            // else {
            //     // If no unvisited cell is found during the kill process, the maze is complete and the algorithm terminates.
            //     break;
            // }
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