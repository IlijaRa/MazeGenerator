// RESET
function Reset(){
    resetAllGlobals();
    setup();
}

// BINARY TREE
document.getElementById('binary-tree-northwest-btn').addEventListener('click', function (e) {
    Reset();
    RED_COLOR = 127;
    GREEN_COLOR = 0;
    BLUE_COLOR = 127;
    ALGORITHM_TRIGGER = "binary-tree-northwest-btn";
    CURRENT_CELL = GRID[GRID.length - 1][GRID[0].length - 1];
    CURRENT_CELL.visited = true;
});

document.getElementById('binary-tree-northeast-btn').addEventListener('click', function (e) {
    Reset();
    RED_COLOR = 127;
    GREEN_COLOR = 0;
    BLUE_COLOR = 127;
    ALGORITHM_TRIGGER = "binary-tree-northeast-btn";
    CURRENT_CELL = GRID[GRID.length - 1][0];
    CURRENT_CELL.visited = true;
});

document.getElementById('binary-tree-southwest-btn').addEventListener('click', function (e) {
    Reset();
    RED_COLOR = 127;
    GREEN_COLOR = 0;
    BLUE_COLOR = 127;
    ALGORITHM_TRIGGER = "binary-tree-southwest-btn";
    CURRENT_CELL = GRID[0][GRID[0].length - 1];
    CURRENT_CELL.visited = true;
});

document.getElementById('binary-tree-southeast-btn').addEventListener('click', function (e) {
    Reset();
    RED_COLOR = 127;
    GREEN_COLOR = 0;
    BLUE_COLOR = 127;
    ALGORITHM_TRIGGER = "binary-tree-southeast-btn";
    CURRENT_CELL = GRID[0][0];
    CURRENT_CELL.visited = true;
});

// SIDEWINDER
document.getElementById('sidewinder-northwest-btn').addEventListener('click', function (e) {
    Reset();
    RED_COLOR = 127;
    GREEN_COLOR = 127;
    BLUE_COLOR = 0;
    ALGORITHM_TRIGGER = "sidewinder-northwest-btn";
    CURRENT_CELL = GRID[GRID.length - 1][GRID[0].length - 1];
    CURRENT_CELL.visited = true;
});

document.getElementById('sidewinder-northeast-btn').addEventListener('click', function (e) {
    Reset();
    RED_COLOR = 127;
    GREEN_COLOR = 127;
    BLUE_COLOR = 0;
    ALGORITHM_TRIGGER = "sidewinder-northeast-btn";
    CURRENT_CELL = GRID[GRID.length - 1][0];
    CURRENT_CELL.visited = true;
});

document.getElementById('sidewinder-southwest-btn').addEventListener('click', function (e) {
    Reset();
    RED_COLOR = 127;
    GREEN_COLOR = 127;
    BLUE_COLOR = 0;
    ALGORITHM_TRIGGER = "sidewinder-southwest-btn";
    CURRENT_CELL = GRID[0][GRID[0].length - 1];
    CURRENT_CELL.visited = true;
});

document.getElementById('sidewinder-southeast-btn').addEventListener('click', function (e) {
    Reset();
    RED_COLOR = 127;
    GREEN_COLOR = 127;
    BLUE_COLOR = 0;
    ALGORITHM_TRIGGER = "sidewinder-southeast-btn";
    CURRENT_CELL = GRID[0][0];
    CURRENT_CELL.visited = true;
});

// ALDOUS-BRODER
document.getElementById('aldous-broder-btn').addEventListener('click', function (e) {
    Reset();
    RED_COLOR = 133;
    GREEN_COLOR = 11;
    BLUE_COLOR = 11;
    ALGORITHM_TRIGGER = "aldous-broder-btn";
    CURRENT_CELL = GRID[floor(random(0, GRID.length - 1))][floor(random(0, GRID[0].length - 1))];
    CURRENT_CELL.visited = true;
});

// WILSON'S
document.getElementById('wilsons-btn').addEventListener('click', function (e) {
    Reset();
    RED_COLOR = 0;
    GREEN_COLOR = 0;
    BLUE_COLOR = 127;
    ALGORITHM_TRIGGER = "wilsons-btn";
    CURRENT_CELL = GRID[floor(random(0, GRID.length - 1))][floor(random(0, GRID[0].length - 1))];
    CURRENT_CELL.visited = true;
});

// HUNT-AND-KILL
document.getElementById('hunt-and-kill-btn').addEventListener('click', function (e) {
    Reset();
    RED_COLOR = 153;
    GREEN_COLOR = 102;
    BLUE_COLOR = 0;
    ALGORITHM_TRIGGER = "hunt-and-kill-btn";
    CURRENT_CELL = GRID[floor(random(0, GRID.length - 1))][floor(random(0, GRID[0].length - 1))];
    CURRENT_CELL.visited = true;
});

// RECURSIVE-BACKTRACKER
document.getElementById('recursive-backtracker-btn').addEventListener('click', function (e) {
    Reset();
    RED_COLOR = 0;
    GREEN_COLOR = 127;
    BLUE_COLOR = 127;
    ALGORITHM_TRIGGER = "recursive-backtracker-btn";
    CURRENT_CELL = GRID[floor(random(0, GRID.length - 1))][floor(random(0, GRID[0].length - 1))];
    CURRENT_CELL.visited = true;
});

// KRUSKAL'S (RANDOMIZED)
// document.getElementById('kruskal-btn').addEventListener('click', function (e) {
//     Reset();
//     ALGORITHM_TRIGGER = "kruskal-btn";
//     CURRENT_CELL = GRID[floor(random(0, GRID.length - 1))][floor(random(0, GRID[0].length - 1))];
//     CURRENT_CELL.visited = true;
// });

// PRIM'S (SIMPLIFIED)
document.getElementById('simplified-prims-btn').addEventListener('click', function (e) {
    Reset();
    RED_COLOR = 153;
    GREEN_COLOR = 50;
    BLUE_COLOR = 102;
    ALGORITHM_TRIGGER = "simplified-prims-btn";
    CURRENT_CELL = GRID[floor(random(0, GRID.length - 1))][floor(random(0, GRID[0].length - 1))];
    CURRENT_CELL.visited = true;

    // populating arrays with CURRENT_CELL as the first item
    ACTIVE.push(CURRENT_CELL);
});

// PRIM'S (TRUE)
document.getElementById('true-prims-btn').addEventListener('click', function (e) {
    Reset();
    RED_COLOR = 56;
    GREEN_COLOR = 155;
    BLUE_COLOR = 106;
    ALGORITHM_TRIGGER = "true-prims-btn";
    CURRENT_CELL = GRID[floor(random(0, GRID.length - 1))][floor(random(0, GRID[0].length - 1))];
    CURRENT_CELL.visited = true;

    // populating arrays with CURRENT_CELL as the first item
    ACTIVE.push(CURRENT_CELL);
});

// GROWING TREE
document.getElementById('growing-tree-btn').addEventListener('click', function (e) {
    Reset();
    RED_COLOR = 50;
    GREEN_COLOR = 50;
    BLUE_COLOR = 153;
    ALGORITHM_TRIGGER = "growing-tree-btn";
    CURRENT_CELL = GRID[floor(random(0, GRID.length - 1))][floor(random(0, GRID[0].length - 1))];
    CURRENT_CELL.visited = true;

    // populating arrays with CURRENT_CELL as the first item
    ACTIVE.push(CURRENT_CELL);
});

// ELLER'S
// document.getElementById('ellers-btn').addEventListener('click', function (e) {
//     Reset();
//     ALGORITHM_TRIGGER = "ellers-btn";
//     CURRENT_CELL = GRID[floor(random(0, GRID.length - 1))][floor(random(0, GRID[0].length - 1))];
//     CURRENT_CELL.visited = true;
// });

// RECURSIVE DIVISION
// document.getElementById('recursive-division-btn').addEventListener('click', function (e) {
//     Reset();
//     ALGORITHM_TRIGGER = "recursive-division-btn";
//     CURRENT_CELL = GRID[floor(random(0, GRID.length - 1))][floor(random(0, GRID[0].length - 1))];
//     CURRENT_CELL.visited = true;
// });

// CLEARING GRID
document.getElementById('clear-grid').addEventListener('click', function (e) {
    Reset();
});

// SHOW WEIGHTS
document.getElementById('show-weights').addEventListener('click', function(e){
    if(SHOW_WEIGHT == 0){
        SHOW_WEIGHT = 1;
        e.target.innerText = "Hide weights";
        // showCellsWeightOnGrid();
    }     
    else{
        SHOW_WEIGHT = 0;
        e.target.innerText = "Show weights";
        // hideCellsWeightOnGrid();
    }
});