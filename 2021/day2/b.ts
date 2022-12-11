const input = Deno.readTextFileSync("input.txt").split("\r\n");

const startingPoint = [0, 0];
let aim = 0;

for (const line of input) {
  const [direction, units] = [line.split(" ")[0], Number(line.split(" ")[1])];
  switch (direction) {
    case "forward":
      startingPoint[0] += units;
      startingPoint[1] += aim * units;
      break;
    case "up":
      aim -= units;
      break;
    case "down":
      aim += units;
      break;
  }
}

console.log(startingPoint[0] * startingPoint[1]);
