function wilsons(){
    // CURRENT_CELL is set to visited so grid has one visited cell which enables algorithm to execute in a good manner

    let loopErasedCells = loopErasedRandomWalk();

    // setting cells to visited in loopErasedCells array
    loopErasedCells.forEach(cell => {
        cell.visited = true;
    });

    // removing walls between cells in loopErasedCells array
    for(i = 0; i < loopErasedCells.length; i++){
        if(i + 1 < loopErasedCells.length)
            removeWall(loopErasedCells[i], loopErasedCells[i + 1]);
    }

    loopErasedCells = [];
}

function loopErasedRandomWalk(){
    let loopErasedCells = [];

    let currentCell = getRandomUnvisitedCell();

    while(true){
        let neighbors = getNeighborsIncludingVisitedNWES(currentCell);

        let randomNumber = floor(random(0, neighbors.length));
    
        let neighbor = neighbors[randomNumber];

        if(neighbor.visited == true){
            break;
        }

        if(loopErasedCells.includes(neighbor)){
            const indexOfItemToRemoveFrom = loopErasedCells.indexOf(neighbor);
    
            if (indexOfItemToRemoveFrom !== -1)
                loopErasedCells.splice(indexOfItemToRemoveFrom);
        }
        
        loopErasedCells.push(neighbor);

        currentCell = neighbor;
    }

    return loopErasedCells;
}

function getRandomUnvisitedCell(){
    let totalUnvisitedCells = [];

    for(let i = 0; i < GRID.length; i++){
        for(let j = 0; j < GRID[0].length; j++){
            if(GRID[i][j].visited == false)
                totalUnvisitedCells.push(GRID[i][j]);
        }
    }

    let randomNumber = floor(random(0, totalUnvisitedCells.length));

    return totalUnvisitedCells[randomNumber];
}