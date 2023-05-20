function truePrims() {
    if (ACTIVE.length > 0) {
        // Sort the ACTIVE array by weight in descending order
        let cell = ACTIVE.sort((a, b) => b.weight - a.weight)[0];

        cell.highlight();

        let available_neighbors = getNeighborsNWES(cell);

        if (available_neighbors.length > 0) {
            // Sort the available_neighbors array by weight in descending orde
            let neighbor = available_neighbors.sort((a, b) => b.weight - a.weight)[0];

            removeWall(cell, neighbor);

            neighbor.visited = true;

            ACTIVE.push(neighbor);
        }
        else {
            const index = ACTIVE.indexOf(cell);

            if (index > -1)
                ACTIVE.splice(index, 1);
        }
    }
}