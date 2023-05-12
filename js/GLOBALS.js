WIDTH = window.innerWidth * 0.99;
HEIGHT = window.innerHeight * 0.92;
ROW_WIDTH = 40;
COL_WIDTH = 40;

// GRID variable will receive all cells in the grid
GRID = [];
CLEAR_GRID = 0;
STACK = [];
GROWING_TREE_ARRAY = [];
ACTIVE = [];
SIDEWINDERS_RUN = [];
CURRENT_CELL = new Cell();

// global variable for algorithm switching
ALGORITHM_TRIGGER = "";

function resetAllGlobals(){
    ROW_WIDTH = 30;
    COL_WIDTH = 30;
    GRID = [];
    CLEAR_GRID = 0;
    STACK = [];
    GROWING_TREE_ARRAY = [];
    ACTIVE = [];
    SIDEWINDERS_RUN = [];
    CURRENT_CELL = new Cell();
    ALGORITHM_TRIGGER = "";
}