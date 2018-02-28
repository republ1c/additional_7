module.exports = function solveSudoku(matrix) {

  var i, j, item;
  for (i = 0; i <= 8; i++) {
    for (j = 0; j <= 8; j++) {
      //proverka znacheniy

      if (!matrix[i][j]) {
        for (item = 1; item <= 9; item++) {
          if (insertItem(matrix, i, j, item)) {
            matrix[i][j] = item;
            if (solveSudoku(matrix)) {
              return matrix; //solved sudoku
            }
            matrix[i][j] = 0;
          }
        }
        return false;
      }
    }
  }
  return true;
}

// function - proverka vstavlenoy cifry (item)

function insertItem(matrix, i, j, item) {
  // proverka po strokam i stolbcam

  var a, b;
  for (a = 0; a <= 8; a++) {
    if (a != i && matrix[a][j] == item) {
      return false;
    }
  }
  for (a = 0; a <= 8; a++) {
    if (a != j && matrix[i][a] == item) {
      return false;
    }
  }

  // proverka kvadrata 3X3

  var y = Math.floor((i / 3)) * 3,
    x = Math.floor((j / 3)) * 3;
  for (a = 0; a < 3; a++) {
    for (b = 0; b < 3; b++) {
      if (a != i && b != j && matrix[y + a][x + b] == item) {
        return false;
      }
    }
  }
  return true;
}
