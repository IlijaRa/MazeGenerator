WIDTH = window.innerWidth * 0.99;
HEIGHT = window.innerHeight * 0.92;
ROW_WIDTH = 30;
COL_WIDTH = 30;
MAX_WEIGHT = 99;

// Used for color management
T = 0;
RED_COLOR = 255;
GREEN_COLOR = 255; 
BLUE_COLOR = 255;

// GRID variable will receive all cells in the grid
GRID = [];
CLEAR_GRID = 0;
STACK = [];
GROWING_TREE_ARRAY = [];
ACTIVE = [];
SIDEWINDERS_RUN = [];
CURRENT_CELL = new Cell();
SHOW_WEIGHT = 0;

// global variable for algorithm switching
ALGORITHM_TRIGGER = "";

// Used to reset all global variables
function resetAllGlobals(){
    ROW_WIDTH = 30;
    COL_WIDTH = 30;
    T = 0;
    GRID = [];
    CLEAR_GRID = 0;
    STACK = [];
    GROWING_TREE_ARRAY = [];
    ACTIVE = [];
    SIDEWINDERS_RUN = [];
    CURRENT_CELL = new Cell();
    SHOW_WEIGHT = 0;
    ALGORITHM_TRIGGER = "";
}