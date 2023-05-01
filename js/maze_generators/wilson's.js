function wilsons(){
    let firstChosenPoint = GRID[floor(random(1, GRID.length))][floor(random(1, GRID[0].length))];

    firstChosenPoint.visited = true;

    let loopErasedCells = loopErasedRandomWalk(firstChosenPoint);

    loopErasedCells.forEach(cell => {
        cell.visited = true;
    });
}

function loopErasedRandomWalk(firstChosenPoint){
    let loopErasedCells = [];
    // let foundVisitedCell = false;
    // small check to see if second randomly chosen cell is not the same as the previously chosen
    // while(currentCell.visited == true){
    //     currentCell = GRID[floor(random(0, GRID.length))][floor(random(0, GRID[0].length))];
    // }

    

    while(true){
        let neighbors = getNeighborsIncludingVisitedNWES(currentCell);

        let randomNumber = floor(random(0, neighbors.length));
    
        let neighbor = neighbors[randomNumber];
    
        if(neighbor.visited == true)
            break;

        if(loopErasedCells.includes(neighbor)){
            const indexOfItemToRemoveFrom = loopErasedCells.indexOf(neighbor);
    
            if (indexOfItemToRemoveFrom !== -1)
                loopErasedCells.splice(indexOfItemToRemoveFrom);
        }
        
        loopErasedCells.push(neighbor);
    }

    return loopErasedCells;
}