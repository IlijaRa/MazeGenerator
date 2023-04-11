// default entity in our grid
function Cell(){
    this.N = true;
    this.W = true;
    this.E = true;
    this.S = true;

    this.visited = false;
    this.show = function(x_coord, y_coord){
        
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
            fill(255, 0, 15)
            rect(x_coord, y_coord, COL_WIDTH, ROW_WIDTH);
        }

        // rect(x_coord, y_coord, COL_WIDTH, ROW_WIDTH);
    }
}