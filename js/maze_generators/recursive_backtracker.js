async function recursiveBacktracker(currentCell){
    let transportCell = currentCell;
    // console.log('currentCell from recursiveBacktracker:', currentCell);
    let stack = [];

    transportCell.visited = true;
    let neighbors = getNeighborsRB(transportCell);

    if(neighbors.length > 0){

    }
    else{
        transportCell = stack.pop();
    }
    // stack.push(currentCell);

    // while(stack.length > 0){
    //     await sleep(500);
    //     let selectedCell = stack.pop();
        
    //     let neighbors = getNeighborsRB(selectedCell);

    //     if(neighbors.length < 0)
    //         break;

    //     // let randomValue = floor(random(0, neighbors.length));
    //     // neighbors[randomValue].visited = true;
    //     // stack.push(neighbors[randomValue]);
    //     // neighbors.forEach(neighbor => {
    //     //     neighbor.visited = true;
    //     // });

        
    //     //neighbors = shuffleArray(neighbors);
    //     // console.log(neighbors);
    //     for(var neighbor of neighbors){
    //         stack.push(neighbor);
    //     }
    // }
}

function unvisitedCellExists(){
    GRID.forEach(cell => {
        if(cell.visited == false)
            return true;
    });

    return false;
}

function getNeighborsRB(currentCell){
    let neighbors = [];

    //north neighbor
    if(checkNeighbor(currentCell.rowPosition, currentCell.colPosition - 1))
        neighbors.push(GRID[currentCell.rowPosition][currentCell.colPosition - 1]);

    //west neighbor
    if(checkNeighbor(currentCell.rowPosition - 1, currentCell.colPosition))
        neighbors.push(GRID[currentCell.rowPosition - 1][currentCell.colPosition]); 

    //east neighbor
    if(checkNeighbor(currentCell.rowPosition + 1, currentCell.colPosition))
        neighbors.push(GRID[currentCell.rowPosition + 1][currentCell.colPosition]);

    //south neighbor
    if(checkNeighbor(currentCell.rowPosition, currentCell.colPosition + 1))
        neighbors.push(GRID[currentCell.rowPosition][currentCell.colPosition + 1]); 

    return neighbors;
}

function checkNeighbor(rowPosition, colPosition){
    if(validatePosition(rowPosition, colPosition) && !isVisited(rowPosition, colPosition))
        return true;
    return false;
}

function validatePosition(rowPosition, colPosition){
    // if(GRID[rowPosition][colPosition] == undefined || GRID[rowPosition][colPosition] == null)
    //     return false;
    if (rowPosition < 0  || colPosition < 0 || rowPosition > GRID.length - 1 || colPosition > GRID[0].length - 1)
        return false;
    return true;
}

function isVisited(rowPosition, colPosition){
    let cell = GRID[rowPosition][colPosition];
    return cell.visited;
}