const input = Deno.readTextFileSync("input.txt");

const floor: number = input
  .split("")
  .reduce((floor, character) => floor + (character === "(" ? 1 : -1), 0);

console.log(floor);
