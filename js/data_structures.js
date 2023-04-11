// default entity in our grid
function Cell(){
    this.show = function(x_coord, y_coord){
        fill(255);
        stroke(0);
        rect(x_coord, y_coord, COL_WIDTH, ROW_WIDTH);
    }
}