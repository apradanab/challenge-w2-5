let arr = [
  [1, 0, 0, 1, 1],
  [0, 1, 1, 0, 0],
  [0, 0, 0, 1, 1],
  [1, 0, 0, 1, 0],
  [1, 0, 1, 0, 0],
];

const grid = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
};

const game = (array) => {
  const rows = array.length;
  const columns = array[0].length;

  const newGrid = [];

  for (let i = 0; i < rows; i++) {
    newGrid.push([]);

    for (let j = 0; j < columns; j++) {
      const livingNeighbors = countLivingNeighbors(array, i, j);
      if (array[i][j] === 1) {
        newGrid[i][j] = livingNeighbors === 2 || livingNeighbors === 3 ? 1 : 0;
      } else {
        newGrid[i][j] = livingNeighbors === 3 ? 1 : 0;
      }
    }
  }

  return newGrid;
};

const countLivingNeighbors = (array, row, column) => {
  const rows = array.length;
  const columns = array[0].length;

  let counter = 0;

  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      const rowNeighbor = row + i;
      const columnNeighbor = column + j;

      if (
        rowNeighbor >= 0 &&
        rowNeighbor < rows &&
        columnNeighbor >= 0 &&
        columnNeighbor < columns &&
        !(i === 0 && j === 0)
      ) {
        counter += array[rowNeighbor][columnNeighbor];
      }
    }
  }

  return counter;
};

for (let stage = 1; stage <= 4; stage++) {
  console.log(`Etapa ${stage}:`);
  grid(arr);
  arr = game(arr);
}

game(arr);
