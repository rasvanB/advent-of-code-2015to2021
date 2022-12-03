const input = Deno.readTextFileSync("input.txt").split("\r\n");

enum actions {
  "on" = 1,
  "off" = -1,
  "toggle" = 2,
}

const litLights: number[][] = new Array(1000)
  .fill(null)
  .map((_) => new Array(1000).fill(0));

for (const text of input) {
  const line = text.split(" ");

  const [from, to] = [
    line.slice(-3)[0].split(","),
    line.slice(-3)[2].split(","),
  ].map((v) => v.map(Number));

  const action =
    line.length === 4
      ? actions.toggle
      : line[1] === "on"
      ? actions.on
      : actions.off;

  for (let i = from[0]; i <= to[0]; i++) {
    for (let j = from[1]; j <= to[1]; j++) {
      litLights[i][j] +=
        action === actions.off ? (litLights[i][j] > 0 ? action : 0) : action;
    }
  }
}

const total = litLights.reduce(
  (prev, row) => (prev += row.reduce((prev, light) => (prev += light), 0)),
  0
);

console.log(total);
