const input = Deno.readTextFileSync("input.txt");
const values = input.split("\r\n");

let total = 0;
for (const value of values) {
  const [length, width, height] = value.split("x").map(Number);
  const [first, second, third] = [
    width * length,
    width * height,
    height * length,
  ];
  total += 2 * (first + second + third) + Math.min(first, second, third);
}

console.log(total);
