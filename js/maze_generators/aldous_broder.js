function AldousBroder() {
    if (countUnvisitedCells() == 0)
        return;

    if (countUnvisitedCells() > 0) {
        let neighbors = getNeighborsIncludingVisitedNWES(CURRENT_CELL);

        let randomNumber = floor(random(0, neighbors.length));

        let neighbor = neighbors[randomNumber];

        if (neighbor.visited == false) {
            removeWall(CURRENT_CELL, neighbor);

            neighbor.visited = true;
        }

        CURRENT_CELL = neighbor;

        CURRENT_CELL.highlight();
    }
}