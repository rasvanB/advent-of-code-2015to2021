const input = Deno.readTextFileSync("input.txt");
const values = input.split("\r\n");

let total = 0;
for (const value of values) {
  const [length, width, height] = value.split("x").map(Number);
  const perimeters = [
    2 * (width + length),
    2 * (width + height),
    2 * (height + length),
  ];

  const ribbon = Math.min(...perimeters);
  const bow = length * width * height;

  total += ribbon + bow;
}

console.log(total);
