function removeWalls(current_cell, next_cell){
    let current_cell_position = current_cell.getPosition();
    let next_cell_position = next_cell.getPosition();

    if(next_cell_position[0] === (current_cell_position[0] - 1)){
        current_cell.N = false;
        next_cell.S = false;
    }
    else if(next_cell_position[0] === (current_cell_position[0] + 1)){
        current_cell.S = false;
        next_cell.N = false;
    }
    else if(next_cell_position[1] === (current_cell_position[1] - 1)){
        current_cell.W = false;
        next_cell.E = false;
    }
    else{
        current_cell.E = false;
        next_cell.W = false;
    }
}