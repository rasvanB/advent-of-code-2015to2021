const input = Deno.readTextFileSync("input.txt").split("");

type Point = [number, number];
const visited: Set<string> = new Set<string>();
const currentCoords: Point = [0, 0];
const directions: { [key: string]: Point } = {
  v: [0, -1],
  "^": [0, 1],
  ">": [1, 0],
  "<": [-1, 0],
};

for (const character of input) {
  const direction = directions[character];
  currentCoords[0] += direction[0];
  currentCoords[1] += direction[1];
  visited.add(currentCoords.join(""));
}

console.log(visited.size + 1);
