const input = Deno.readTextFileSync("input.txt").split("\r\n");
const len = input[0].length;

type counts = [number, number];
const countArr: counts[] = new Array(len).fill(0).map(() => [0, 0] as counts);

for (const line of input) {
  for (const index in line.split("")) {
    const bit = Number(line[index]);
    countArr[index][bit]++;
  }
}

const gammaRateAsDeciaml = parseInt(
  countArr.map((x) => (x[0] > x[1] ? 0 : 1)).join(""),
  2
);
const epsilonRateAsDecmial = parseInt(
  countArr.map((x) => (x[0] < x[1] ? 0 : 1)).join(""),
  2
);
console.log(gammaRateAsDeciaml * epsilonRateAsDecmial);
