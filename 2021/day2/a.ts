const input = Deno.readTextFileSync("input.txt").split("\r\n");

const startingPoint = [0, 0];

for (const line of input) {
  const [direction, units] = [line.split(" ")[0], Number(line.split(" ")[1])];
  switch (direction) {
    case "forward":
      startingPoint[0] += units;
      break;
    case "up":
      startingPoint[1] -= units;
      break;
    case "down":
      startingPoint[1] += units;
      break;
  }
}

console.log(startingPoint[0] * startingPoint[1]);
