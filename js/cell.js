// default entity in our grid
function Cell(positionX, positionY){
    this.positionX = positionX;
    this.positionY = positionY;
    this.coordX;
    this.coordY;
    this.N = true;
    this.W = true;
    this.E = true;
    this.S = true;

    this.visited = false;

    this.checkNeighbors = function(){
        let neighbors = [];
        if(this.validateCoordinates(positionX, positionY - 1) ? GRID[positionX][positionY - 1] : -1 != -1)
            neighbors.push(GRID[positionX][positionY - 1]); //north neighbor

        if(this.validateCoordinates(positionX - 1, positionY) ? GRID[positionX - 1][positionY] : -1 != -1)
            neighbors.push(GRID[positionX - 1][positionY]); //west neighbor

        if(this.validateCoordinates(positionX + 1, positionY) ? GRID[positionX + 1][positionY] : -1 != -1)
            neighbors.push(GRID[positionX + 1][positionY]); //east neighbor

        if(this.validateCoordinates(positionX, positionY + 1) ? GRID[positionX][positionY + 1] : -1 != -1)
            neighbors.push(GRID[positionX][positionY + 1]); //south neighbor

        if(neighbors.length > 0){
            var randomNumber = floor(random(0, neighbors.length));
            return neighbors[randomNumber];
        }
        else{
            return undefined;
        }
    }

    this.validateCoordinates = function(positionX, positionY){
        if (positionX < 0  || positionY < 0 || positionY > GRID.length - 1 ||  positionX > GRID[0].length - 1)
            return false
        return true;
    }

    this.getPosition = function (){
        return [positionX, positionY];
    }

    this.highlight = function(){
        noStroke();
        fill(0, 0, 255);
        rect(this.coordX, this.coordY, COL_WIDTH, ROW_WIDTH);
    }

    this.show = function(x_coord, y_coord){
        this.coordX = x_coord;
        this.coordY = y_coord;

        fill(255);
        stroke(0);

        if(this.N){
            line(x_coord, y_coord, x_coord + COL_WIDTH, y_coord) // N
        }      
        if(this.W){
            line(x_coord, y_coord, x_coord, y_coord + ROW_WIDTH) // W
        }  
        if(this.E){
            line(x_coord + COL_WIDTH, y_coord, x_coord + COL_WIDTH, y_coord + ROW_WIDTH) // E
        }  
        if(this.S){
            line(x_coord, y_coord + ROW_WIDTH, x_coord + COL_WIDTH, y_coord + ROW_WIDTH) // S
        } 
        
        if(this.visited){
            noStroke();
            fill(255, 0, 255)
            rect(x_coord, y_coord, COL_WIDTH, ROW_WIDTH);
        }

        // rect(x_coord, y_coord, COL_WIDTH, ROW_WIDTH);
    }
}