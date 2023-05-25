async function recursiveBacktracker() {
    if (countUnvisitedCells() == 0)
        return;
    
    let neighbors = getNeighborsNWES(CURRENT_CELL);

    if (neighbors.length > 0) {
        let randomValue = floor(random(0, neighbors.length));

        let chosenNeighbor = neighbors[randomValue];

        chosenNeighbor.visited = true;

        removeWall(CURRENT_CELL, chosenNeighbor);

        STACK.push(CURRENT_CELL);

        CURRENT_CELL = chosenNeighbor;
    }
    else if (STACK.length > 0) {
        CURRENT_CELL = STACK.pop();
    }

    CURRENT_CELL.highlight();
}