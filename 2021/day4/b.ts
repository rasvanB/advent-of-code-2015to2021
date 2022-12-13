const input = Deno.readTextFileSync("input.txt").split("\r\n");
const drawnNumbers: Set<number> = new Set();

type Grid = number[][];
const grids: Grid[] = [];

for (let i = 2; i < input.length; i += 6) {
  const grid = input.slice(i, i + 5).map((row) =>
    row
      .split(" ")
      .filter((x) => x)
      .map(Number)
  );
  grids.push(grid as Grid);
}

const numberOfBoards = grids.length;

const wonBoards: Set<Grid> = new Set();

const checkBingo = (grid: Grid) => {
  for (const row of grid) {
    if (row.every((x) => drawnNumbers.has(x))) {
      return row;
    }
  }
  for (let i = 0; i < 5; i++) {
    const column = grid.map((row) => row[i]);
    if (column.every((x) => drawnNumbers.has(x))) {
      return column;
    }
  }
};

const numbersToDraw = input[0].split(",").map(Number);

for (const number of numbersToDraw) {
  drawnNumbers.add(number);
  for (const grid of grids) {
    const bingo = checkBingo(grid);
    if (bingo) {
      wonBoards.add(grid);
      if (wonBoards.size === numberOfBoards) {
        const unmarkedNumbersSum = grid
          .flat()
          .reduce((a, b) => a + (drawnNumbers.has(b) ? 0 : b), 0);
        console.log(unmarkedNumbersSum * number);
        Deno.exit();
      }
    }
  }
}
