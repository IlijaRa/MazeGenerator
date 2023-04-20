async function binaryTree(currentCell){
    let selectedCell = new Cell();
    let chosenNeighbor = new Cell();
    let neighbors = [];
    let stack = [];

    currentCell.visited = true;

    stack.push(currentCell);

    while(stack.length > 0){
        await sleep(500);

        selectedCell = stack[stack.length - 1];

        neighbors = getNeighborsTF(selectedCell);

        // if(chosenNeighbor.length < 1){
            while(neighbors.length < 1 && neighbor != undefined){
                selectedCell = stack.pop();
                neighbors = getNeighborsTF(selectedCell);
            }
        // }

        chosenNeighbor = neighbors[floor(random(0, neighbors.length))];
        
        removeWalls(selectedCell, chosenNeighbor);

        chosenNeighbor.visited = true;

        stack.push(chosenNeighbor);
    }
}

function getNeighborsTF(currentCell){
    let neighbors = [];

    //north neighbor
    if(checkNeighbor(currentCell.rowPosition, currentCell.colPosition - 1))
        neighbors.push(GRID[currentCell.rowPosition][currentCell.colPosition - 1]);

    //east neighbor
    if(checkNeighbor(currentCell.rowPosition + 1, currentCell.colPosition))
        neighbors.push(GRID[currentCell.rowPosition + 1][currentCell.colPosition]);

    return neighbors;
}