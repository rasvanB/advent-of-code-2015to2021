const input = Deno.readTextFileSync("input.txt").split("\r\n").map(Number);

let prev = input[0];
let total = 0;
for (let i = 1; i < input.length; i++) {
  const curr = input[i];
  if (curr > prev) {
    total++;
  }
  prev = curr;
}

console.log(total);
