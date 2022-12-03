const input = Deno.readTextFileSync("input.txt").split("");

type Point = [number, number];
const visited: Set<string> = new Set<string>();
const santaCoords: Point = [0, 0];
const robotCoords: Point = [0, 0];
const directions: { [key: string]: Point } = {
  v: [0, -1],
  "^": [0, 1],
  ">": [1, 0],
  "<": [-1, 0],
};

let santaTurn = true;

for (const character of input) {
  const direction = directions[character];
  if (santaTurn) {
    santaCoords[0] += direction[0];
    santaCoords[1] += direction[1];
    visited.add(santaCoords.join(","));
  } else {
    robotCoords[0] += direction[0];
    robotCoords[1] += direction[1];
    visited.add(robotCoords.join(","));
  }
  santaTurn = !santaTurn;
}

console.log(visited.size + (visited.has("0,0") ? 0 : 1));
