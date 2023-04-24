function simplifiedPrims(){
    if(ACTIVE.length > 0){
        let randomValue = floor(random(0, ACTIVE.length));

        let cell = ACTIVE[randomValue];
        
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