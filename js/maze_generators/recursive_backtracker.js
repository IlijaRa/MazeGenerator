async function recursiveBacktracker(currentCell){
    let chosenNeighbor;
    let stack = [];

    currentCell.visited = true;

    stack.push(currentCell);

    while(stack.length > 0){
        await sleep(50);

        let selectedCell = stack[stack.length - 1];
        let neighbors = getNeighbors(selectedCell);

        if(neighbors.length < 1){
            while(neighbors.length < 1){
                selectedCell = stack.pop();
                neighbors = getNeighbors(selectedCell);
            }
        }

        chosenNeighbor = neighbors[floor(random(0, neighbors.length))];

        removeWalls(selectedCell, chosenNeighbor);
    
        chosenNeighbor.visited = true;
        
        stack.push(chosenNeighbor);
    }
}