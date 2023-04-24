function growingTree(){
    if(ACTIVE.length > 0){
        let cell = ACTIVE[ACTIVE.length - 1];

        cell.highlight();

        let available_neighbors = getNeighborsNWES(cell);

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