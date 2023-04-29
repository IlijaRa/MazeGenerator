// default entity in our grid
function Cell(rowPosition, colPosition){
    this.N = true;
    this.W = true;
    this.E = true;
    this.S = true;

    this.coordX;
    this.coordY;

    this.rowPosition = rowPosition;
    this.colPosition = colPosition;
    
    this.visited = false;

    this.getPosition = function (){
        return [rowPosition, colPosition];
    }

    this.getCoordinates = function (){
        return [this.coordX, this.coordY];
    }

    this.highlight = function(){
        noStroke();
        fill(255, 0, 255);
        rect(this.coordX, this.coordY, COL_WIDTH, ROW_WIDTH);
    }

    this.show = function(x_coord, y_coord){
        this.coordX = x_coord;
        this.coordY = y_coord;

        fill(255);
        stroke(0);

        if(this.N)
            line(x_coord, y_coord, x_coord + COL_WIDTH, y_coord) // N     
        if(this.W)
            line(x_coord, y_coord, x_coord, y_coord + ROW_WIDTH) // W 
        if(this.E)
            line(x_coord + COL_WIDTH, y_coord, x_coord + COL_WIDTH, y_coord + ROW_WIDTH) // E
        if(this.S)
            line(x_coord, y_coord + ROW_WIDTH, x_coord + COL_WIDTH, y_coord + ROW_WIDTH) // S
        
        if(this.visited){
            let cellColor = color(130, 245, 220);
            // let color1 = color(217, 228, 188);
            // let color2 = color(145, 234, 234);
            // t += 0.0000009;
            // let lerpedColor = lerpColor(color1, color2, t);

            fill(cellColor);

            // if (t > 1)
            //     t = 0;
            noStroke();
            rect(x_coord, y_coord, COL_WIDTH, ROW_WIDTH);
        }
    }

    this.hide = function(){
        this.N = false;
        this.W = false;
        this.E = false;
        this.S = false;

        noStroke();
        fill(255, 255, 255);
        rect(this.coordX, this.coordY, COL_WIDTH, ROW_WIDTH);
    }
}