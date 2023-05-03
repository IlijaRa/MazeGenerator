const sleep = (time) => {
    return new Promise(resolve => setTimeout(resolve, time));
}

function removeWall(currentCell, neighborCell) {
    let currentCellPosition = currentCell.getPosition();
    let neighborCellPosition = neighborCell.getPosition();

    if (neighborCellPosition[0] === (currentCellPosition[0] - 1)) {
        currentCell.N = false;
        neighborCell.S = false;
    }
    else if (neighborCellPosition[0] === (currentCellPosition[0] + 1)) {
        currentCell.S = false;
        neighborCell.N = false;
    }
    else if (neighborCellPosition[1] === (currentCellPosition[1] - 1)) {
        currentCell.W = false;
        neighborCell.E = false;
    }
    else {
        currentCell.E = false;
        neighborCell.W = false;
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}