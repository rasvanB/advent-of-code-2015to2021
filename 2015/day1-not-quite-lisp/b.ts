const input = Deno.readTextFileSync("input.txt");

let floor = 0;

for (const index in input.split("")) {
  const character = input[index];
  if (character === "(") {
    floor++;
  } else {
    if (floor === 0) {
      console.log(Number(index) + 1);
      break;
    }
    floor--;
  }
}
