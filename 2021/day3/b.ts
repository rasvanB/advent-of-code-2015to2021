const input = Deno.readTextFileSync("input.txt").split("\r\n");
const len = input[0].length;

type counts = [number, number];
const countArr: counts[] = new Array(len).fill(0).map(() => [0, 0] as counts);

const calculateRating = (isOxygen: boolean) => {
  let currentLines = input;

  for (let index = 0; index < len; index++) {
    for (const line of currentLines) {
      const bit = Number(line[index]);
      countArr[index][bit]++;
    }

    const criteria = isOxygen
      ? countArr[index][0] > countArr[index][1]
        ? 0
        : 1
      : countArr[index][0] <= countArr[index][1]
      ? 0
      : 1;

    currentLines = currentLines.filter((x) => Number(x[index]) === criteria);

    if (currentLines.length === 1) break;
  }
  countArr.forEach((x) => ((x[0] = 0), (x[1] = 0)));
  return parseInt(currentLines[0], 2);
};
console.log(calculateRating(false) * calculateRating(true));
