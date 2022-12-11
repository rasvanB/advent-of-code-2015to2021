const input = Deno.readTextFileSync("input.txt").split("\r\n").map(Number);

let total = 0;
let prev = input.slice(0, 3).reduce((a, b) => a + b, 0);
for (let i = 1; i < input.length; i++) {
  const curr = input.slice(i, i + 3).reduce((a, b) => a + b, 0);
  if (curr > prev) {
    total++;
  }
  prev = curr;
}
console.log(total);
