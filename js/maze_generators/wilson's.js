let encounteredVisitedCell = new Cell();

function wilsons() {
    // CURRENT_CELL is set to visited so grid has one visited cell which enables algorithm to execute in a good manner

    let loopErasedCells = loopErasedRandomWalk();

    if (loopErasedCells.length < 1)
        return;

    // setting cells to visited in loopErasedCells array
    loopErasedCells.forEach(cell => {
        cell.visited = true;
        cell.highlight();
    });

    // removing walls between cells in loopErasedCells array
    for (i = 0; i < loopErasedCells.length; i++) {
        if (loopErasedCells[i] != loopErasedCells[loopErasedCells.length - 1])
            removeWall(loopErasedCells[i], loopErasedCells[i + 1]);
        else if (loopErasedCells[i] == loopErasedCells[loopErasedCells.length - 1])
            removeWall(loopErasedCells[i], encounteredVisitedCell);
    }

    encounteredVisitedCell = new Cell();

    loopErasedCells = [];
}

function loopErasedRandomWalk() {
    let loopErasedCells = [];

    // let result = 

    let currentCell = getRandomUnvisitedCell();

    while (countUnvisitedCells() > 0) {
        let neighbors = getNeighborsIncludingVisitedNWES(currentCell);

        let randomNumber = floor(random(0, neighbors.length));

        let neighbor = neighbors[randomNumber];

        // if all neighbors are visited, mark current cell as visited and join with random neighbor
        if (CheckIfAllNeighborsAreVisited(neighbors)) {
            currentCell.visited = true;
            currentCell.highlight();
            removeWall(currentCell, neighbor);
            break;
        }

        if (neighbor.visited == true) {
            encounteredVisitedCell = neighbor;
            break;
        }

        if (loopErasedCells.includes(neighbor)) {
            const indexOfItemToRemoveFrom = loopErasedCells.indexOf(neighbor);

            if (indexOfItemToRemoveFrom !== -1)
                loopErasedCells.splice(indexOfItemToRemoveFrom);
        }

        loopErasedCells.push(neighbor);

        currentCell = neighbor;
    }

    return loopErasedCells;
}