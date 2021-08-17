let matrix = [[5, 3, 0, 0, 7, 0, 0, 0, 0],
[6, 0, 0, 1, 9, 5, 0, 0, 0],
[0, 9, 8, 0, 0, 0, 0, 6, 0],
[8, 0, 0, 0, 6, 0, 0, 0, 3],
[4, 0, 0, 8, 0, 3, 0, 0, 1],
[7, 0, 0, 0, 2, 0, 0, 0, 6],
[0, 6, 0, 0, 0, 0, 2, 8, 0],
[0, 0, 0, 4, 1, 9, 0, 0, 5],
[0, 0, 0, 0, 8, 0, 0, 7, 9]];

function sudoku(matrix, row = 0, col = 0) {
    if(row === matrix.length){
        for (let row of matrix) {
            console.log(row.join(" "));
        }
        return;
    }
    if(col === matrix.length){
        sudoku(matrix, row+1, 0);
        return;
    }
    if(matrix[row][col] != 0){
        sudoku(matrix, row, col+1);
    }
    else{
        for (let i = 1; i <= 9; i++) {
            if(isSafe(matrix, row, col, i)){
                matrix[row][col] = i;
                sudoku(matrix, row, col+1);
                matrix[row][col] = 0;
            }
        }
    }
}

function isSafe(matrix, row, col, value) {
    for (let i = 0; i < matrix.length; i++) {
        if(matrix[row][i] === value){
            return false;
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        if(matrix[i][col] === value){
            return false;
        }   
    }
    let modRow = 3*(parseInt(row / 3));
    let modCol = 3*(parseInt(col / 3));
    for (let i = modRow; i < modRow+3; i++) {
        for (let j = modCol; j < modCol+3; j++) {
            if(matrix[i][j] === value){
                return false;
            }
        }
    }
    return true;
}

sudoku(matrix);